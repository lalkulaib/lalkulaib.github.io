// ─────────────────────────────────────────────────────────────────────────────
//  Minimal BibTeX parser (no dependencies).
//  parseBibtex(text) -> array of publication objects the site understands.
//
//  Each .bib entry may carry standard fields (title, author, year, journal,
//  booktitle, school, doi, url) PLUS these custom fields, all optional:
//     award      = {Best Paper Award}
//     pdf        = {https://…/paper.pdf}
//     slides     = {https://…/slides.pdf}
//     poster     = {https://…/poster.pdf}
//     code       = {https://github.com/…}
//     area       = {social, health}        % comma-separated area ids
//     venuetype  = {journal|conference|workshop|thesis}   % overrides the guess
//
//  Duplicates are removed by cite key (the {key} right after @type{ ).
// ─────────────────────────────────────────────────────────────────────────────

function stripBraces(s) {
  return s
    .replace(/[{}]/g, '')
    .replace(/\\&/g, '&').replace(/\\%/g, '%').replace(/\\_/g, '_').replace(/\\#/g, '#')
    .replace(/---/g, '-').replace(/--/g, '-')
    .replace(/``|''/g, '"')
    .replace(/\\['"^`~=.]?\{?([a-zA-Z])\}?/g, '$1') // drop simple LaTeX accents
    .replace(/\s+/g, ' ')
    .trim();
}

// "Last, First M. and Doe, Jane" -> "F. M. Last, J. Doe"
function formatAuthors(raw) {
  if (!raw) return '';
  const people = raw.split(/\s+and\s+/i).map(p => p.trim()).filter(Boolean);
  return people.map(p => {
    let last, firsts;
    if (p.includes(',')) {
      const [l, f] = p.split(',');
      last = l.trim();
      firsts = (f || '').trim();
    } else {
      const parts = p.split(/\s+/);
      last = parts.pop();
      firsts = parts.join(' ');
    }
    const inits = firsts.split(/[\s.]+/).filter(Boolean).map(x => x[0].toUpperCase() + '.').join(' ');
    return (inits ? inits + ' ' : '') + last;
  }).join(', ');
}

// Split the inside of an entry into field=value pairs, respecting nested braces.
function splitFields(body) {
  const fields = {};
  let i = 0;
  const n = body.length;
  while (i < n) {
    while (i < n && /[\s,]/.test(body[i])) i++;
    let key = '';
    while (i < n && /[A-Za-z0-9_-]/.test(body[i])) { key += body[i]; i++; }
    if (!key) break;
    while (i < n && /\s/.test(body[i])) i++;
    if (body[i] !== '=') { // malformed; skip to next comma
      while (i < n && body[i] !== ',') i++;
      continue;
    }
    i++; // skip =
    while (i < n && /\s/.test(body[i])) i++;
    let val = '';
    if (body[i] === '{') {
      let depth = 0;
      do {
        if (body[i] === '{') depth++;
        else if (body[i] === '}') depth--;
        val += body[i]; i++;
      } while (i < n && depth > 0);
      val = val.slice(1, -1);
    } else if (body[i] === '"') {
      i++; // skip opening quote
      while (i < n && body[i] !== '"') { val += body[i]; i++; }
      i++; // skip closing quote
    } else {
      while (i < n && body[i] !== ',') { val += body[i]; i++; }
    }
    fields[key.toLowerCase()] = val.trim();
    while (i < n && body[i] !== ',') i++;
    i++;
  }
  return fields;
}

function guessVenueType(type, f) {
  if (f.venuetype) return f.venuetype.toLowerCase();
  const t = type.toLowerCase();
  if (t === 'article') return 'journal';
  if (t === 'inproceedings' || t === 'conference') return 'conference';
  if (t === 'phdthesis' || t === 'mastersthesis') return 'thesis';
  if (t === 'inbook' || t === 'incollection') return 'journal';
  return 'workshop';
}

function parseBibtex(text) {
  const entries = [];
  const seen = new Set();
  const re = /@(\w+)\s*\{\s*([^,]+),/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const type = m[1];
    if (/^(comment|preamble|string)$/i.test(type)) continue;
    const key = m[2].trim();
    // find the matching closing brace for this entry
    let i = re.lastIndex, depth = 1;
    while (i < text.length && depth > 0) {
      if (text[i] === '{') depth++;
      else if (text[i] === '}') depth--;
      i++;
    }
    const body = text.slice(re.lastIndex, i - 1);
    re.lastIndex = i;

    if (seen.has(key)) continue; // dedupe by cite key
    seen.add(key);

    const f = splitFields(body);
    const venueType = guessVenueType(type, f);
    const venue = stripBraces(
      f.booktitle || f.journal || f.school || f.publisher || f.howpublished || ''
    );
    const areas = (f.area || f.areas || '').split(',').map(s => s.trim()).filter(Boolean);

    // rebuild a clean bibtex string for the "Cite" modal
    const cleanBib = '@' + type + '{' + key + ',\n' +
      Object.keys(f)
        .filter(k => !['award', 'pdf', 'slides', 'poster', 'code', 'area', 'areas', 'venuetype'].includes(k))
        .map(k => '  ' + k + ' = {' + f[k].replace(/\s+/g, ' ').trim() + '}')
        .join(',\n') +
      '\n}';

    entries.push({
      id: key,
      title: stripBraces(f.title || 'Untitled'),
      authors: formatAuthors(f.author || ''),
      venue,
      venueType,
      year: parseInt(f.year, 10) || 0,
      areas,
      award: stripBraces(f.award || ''),
      pdf: (f.pdf || '').trim(),
      code: (f.code || '').trim(),
      slides: (f.slides || '').trim(),
      poster: (f.poster || '').trim(),
      doi: (f.doi || f.url || '').trim(),
      bibtex: cleanBib,
    });
  }
  return entries;
}

if (typeof window !== 'undefined') window.parseBibtex = parseBibtex;
