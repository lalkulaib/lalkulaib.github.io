// ─────────────────────────────────────────────────────────────────────────────
//  Lulwah AlKulaib - personal / CV site content  (THE FILE YOU EDIT)
//  Edit the values below; the site updates automatically. Works both when
//  opened locally and when hosted. (Publications live in publications.bib.)
// ─────────────────────────────────────────────────────────────────────────────
//  Publications mirror the lab-site structure (award / pdf / bibtex / slides /
//  poster / doi / code all optional - the UI hides what's missing).
// ─────────────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: 'Lulwah AlKulaib',
  nameArabic: 'لولوه الكليب',
  title: 'Assistant Professor',
  affiliation: 'Department of Computer Science, Kuwait University',
  email: 'lalkulaib@cs.ku.edu.kw',
  cv: 'assets/CV.pdf',      // drop your CV PDF in the assets folder as CV.pdf
  labUrl: '',              // paste your lab's web address here to turn on the "Visit lab" banner
  summary: 'I am an Assistant Professor in the Computer Science Department at Kuwait University. My research focuses on developing innovative models with practical applications in social media analytics, the study of low-resource languages, and public-health initiatives. My work integrates extensive experience across research roles with my interest in Natural Language Processing, Machine Learning, and Deep Learning, creating robust algorithms that effectively navigate and interpret the complexities of human language and behavior.',
  links: [
    { label: 'Email',    url: 'mailto:lalkulaib@cs.ku.edu.kw' },
    { label: 'Scholar',  url: 'https://scholar.google.com/citations?hl=en&user=QaVvPuwAAAAJ' },
    { label: 'GitHub',   url: 'https://github.com/lalkulaib' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lalkulaib/' },
    { label: 'ORCID',    url: 'https://orcid.org/0000-0001-9827-0882' },
  ],
  interests: ['Artificial Intelligence', 'Computational Linguistics', 'Behavioral Modeling'],
};

const EDUCATION = [
  { degree: 'PhD in Computer Science & Applications', school: 'Virginia Tech', year: '2024',
    dates: 'Aug 2018 - Feb 2024',
    advisor: 'Prof. Chang-Tien Lu', advisorUrl: 'https://people.cs.vt.edu/~ctlu/',
    dissertation: 'https://hdl.handle.net/10919/118611' },
  { degree: 'MSc in Computer Science', school: 'George Washington University', year: '2018',
    dates: 'Aug 2016 - May 2018' },
  { degree: 'BSc in Computer Science', school: 'Gulf University for Science and Technology', year: '2011',
    dates: 'Sep 2006 - May 2011' },
];

// Professional experience (most recent first). Shown only on the Experience page.
const EXPERIENCE = [
  { role: 'Assistant Professor', org: 'Kuwait University', dates: 'Apr 2024 - Present',
    detail: 'Assistant Professor in the Computer Science Department.' },
  { role: 'Teaching Assistant', org: 'Kuwait University', dates: 'Aug 2018 - Apr 2024',
    detail: 'Computer Science Teaching Assistant on a scholarship while a PhD candidate at Virginia Tech.' },
  { role: 'Research Intern', org: 'Stanford Muslim Mental Health & Islamic Psychology Lab', dates: 'Aug 2023 - May 2025',
    detail: 'On the Suicide Response Team, performed data analysis across multiple research projects - extracting insights from complex datasets to support evidence-based conclusions.' },
  { role: 'Graduate Teaching Assistant', org: 'Virginia Tech', dates: 'Aug 2023 - Dec 2023',
    detail: 'TA for Web Application Development: held office hours, supported student inquiries, and graded assignments with timely, constructive feedback.' },
  { role: 'Summer Intern', org: 'BEM Controls · Advanced Research Institute, Virginia Tech', dates: 'May 2017 - Aug 2017',
    detail: 'Built a cross-platform mobile app for energy management in React Native, running on both iOS and Android.' },
  { role: 'Programmer', org: 'Kuwait Institute for Scientific Research (KISR)', dates: 'Sep 2012 - Jul 2018',
    detail: 'In the Technology Applications for Special Needs Section, delivered technical support and tailored software for individuals with disabilities - building Arabic interfaces and integrating specialized hardware, with results shown in publications.' },
  { role: 'Trainee', org: 'Public Institution for Social Security (PIFSS)', dates: 'Jan 2012 - Sep 2012',
    detail: 'Selected for the Kuwaiti IBM Workforce Development Initiative; honed web and mobile development under IBM mentorship and contributed to the PIFSS mail and document tracking system.' },
];

// Awards & honors (most recent first).
const AWARDS = [
  { title: 'Best Paper Award', venue: 'ASONAM · Industrial Track', date: 'Aug 2025',
    detail: '“TrendScope: A Temporal Hypergraph Framework for Food Trend Discovery.”',
    link: 'https://asonam.cpsc.ucalgary.ca/2025/' },
  { title: 'Best Paper Award', venue: 'ASONAM', date: 'Aug 2022',
    detail: '“Predicting Depression and Anxiety on Reddit: a Multi-task Learning Approach.”',
    link: 'https://asonam.cpsc.ucalgary.ca/' },
];

const SKILLS = ['Python', 'Machine Learning', 'Data Analysis', 'Natural Language Processing', 'Deep Learning'];
const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Native' },
];

// Research areas double as publication filters. `id` links papers -> areas.
const AREAS = [
  { id: 'social',     name: 'Social Media Analytics' },
  { id: 'nlp',        name: 'NLP' },
  { id: 'health',     name: 'Public Health' },
  { id: 'graph',      name: 'Graph & Hypergraph Learning' },
  { id: 'ml',         name: 'Machine Learning' },
];

// venueType ∈ 'journal' | 'conference' | 'workshop' | 'thesis'
const PUBLICATIONS = [
  {
    id: 'chen-2025-urban-twins',
    title: 'Unveiling the Ethical Dimension of Urban Digital Twins: A Framework for Responsible and Sustainable Urban Planning',
    authors: 'F. Chen, A. Alhamadani, S. Sarkar, L. AlKulaib, A. Khatri, C.-T. Lu',
    venue: 'Journal of Planning Education and Research',
    venueType: 'journal', year: 2025, areas: ['ml'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publication/chen-2025-unveiling/',
    bibtex: `@article{chen2025unveiling,
  title   = {Unveiling the Ethical Dimension of Urban Digital Twins: A Framework for Responsible and Sustainable Urban Planning},
  author  = {Chen, Fanglan and Alhamadani, Abdulaziz and Sarkar, Shailik and AlKulaib, Lulwah and Khatri, Aadyant and Lu, Chang-Tien},
  journal = {Journal of Planning Education and Research},
  year    = {2025}
}`,
  },
  {
    id: 'alkulaib-2024-ghsom',
    title: 'Adaptive Hierarchical GHSOM with Federated Learning for Context-Aware Anomaly Detection in IoT Networks',
    authors: 'L. AlKulaib',
    venue: 'IEEE International Conference on Big Data (BigData)',
    venueType: 'conference', year: 2024, areas: ['ml', 'graph'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publication/alkulaib-2024-adaptive/',
    bibtex: `@inproceedings{alkulaib2024adaptive,
  title     = {Adaptive Hierarchical GHSOM with Federated Learning for Context-Aware Anomaly Detection in IoT Networks},
  author    = {AlKulaib, Lulwah},
  booktitle = {2024 IEEE International Conference on Big Data (BigData)},
  year      = {2024}
}`,
  },
  {
    id: 'alkulaib-2024-hypergraph-thesis',
    title: 'Analyzing Networks with Hypergraphs: Detection, Classification, and Prediction',
    authors: 'L. A. KH. AlKulaib',
    venue: 'Virginia Tech (PhD Dissertation)',
    venueType: 'thesis', year: 2024, areas: ['graph'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publication/alkulaib-2024-analyzing/',
    bibtex: `@phdthesis{alkulaib2024analyzing,
  title  = {Analyzing Networks with Hypergraphs: Detection, Classification, and Prediction},
  author = {AlKulaib, Lulwah Ahmad KH},
  school = {Virginia Tech},
  year   = {2024}
}`,
  },
  {
    id: 'alhamadani-2024-airline',
    title: 'Empowering Airline Route Decisions with LLM-Generated Pseudo-labels and Zero-Shot Review Prediction',
    authors: 'A. Alhamadani, K. Althubiti, J. He, S. Sarkar, L. AlKulaib, A. R. Shaik, S. Lee, M. Khan, C.-T. Lu',
    venue: 'ASONAM',
    venueType: 'conference', year: 2024, areas: ['nlp', 'ml'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publication/alhamadani-2024-empowering/',
    bibtex: `@inproceedings{alhamadani2024empowering,
  title     = {Empowering Airline Route Decisions with LLM-Generated Pseudo-labels and Zero-Shot Review Prediction},
  author    = {Alhamadani, Abdulaziz and Althubiti, Khadija and He, Jianfeng and Sarkar, Shailik and AlKulaib, Lulwah and Shaik, Abdul Raheem and Lee, Seungwon and Khan, Mahmood and Lu, Chang-Tien},
  booktitle = {IEEE/ACM Int. Conf. on Advances in Social Networks Analysis and Mining (ASONAM)},
  year      = {2024}
}`,
  },
  {
    id: 'yildiz-2024-school',
    title: 'Enhancing School Success Prediction with FRC and Merged GNN',
    authors: 'M. Yildiz Aktas, A. Khatri, M. Almutairi, L. AlKulaib, C.-T. Lu',
    venue: 'ASONAM',
    venueType: 'conference', year: 2024, areas: ['graph', 'ml'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publication/yildiz-2024-enhancing/',
    bibtex: `@inproceedings{yildiz2024enhancing,
  title     = {Enhancing School Success Prediction with FRC and Merged GNN},
  author    = {Yildiz Aktas, Melike and Khatri, Aadyant and Almutairi, Mariam and AlKulaib, Lulwah and Lu, Chang-Tien},
  booktitle = {IEEE/ACM Int. Conf. on Advances in Social Networks Analysis and Mining (ASONAM)},
  year      = {2024}
}`,
  },
  {
    id: 'asonam-2022-reddit',
    title: 'Analyzing Depression and Anxiety from Reddit Posts',
    authors: 'L. AlKulaib, et al.',
    venue: 'ASONAM',
    venueType: 'conference', year: 2022, areas: ['social', 'health'], award: 'Best Paper Award',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publications/conference-paper/',
    bibtex: `@inproceedings{alkulaib2022reddit,
  title     = {Analyzing Depression and Anxiety from Reddit Posts},
  author    = {AlKulaib, Lulwah and others},
  booktitle = {IEEE/ACM Int. Conf. on Advances in Social Networks Analysis and Mining (ASONAM)},
  year      = {2022},
  note      = {Best Paper Award}
}`,
  },
  {
    id: 'broniatowski-2018-weaponized',
    title: 'Weaponized Health Communication: Twitter Bots and Russian Trolls Amplify the Vaccine Debate',
    authors: 'D. A. Broniatowski, A. M. Jamison, S. Qi, L. AlKulaib, et al.',
    venue: 'American Journal of Public Health',
    venueType: 'journal', year: 2018, areas: ['health', 'social'], award: '',
    pdf: '', code: '', slides: '', poster: '',
    doi: 'https://www.lalkulaib.com/publications/journal-article/',
    bibtex: `@article{broniatowski2018weaponized,
  title   = {Weaponized Health Communication: Twitter Bots and Russian Trolls Amplify the Vaccine Debate},
  author  = {Broniatowski, David A. and Jamison, Amelia M. and Qi, SiHua and AlKulaib, Lulwah and others},
  journal = {American Journal of Public Health},
  year    = {2018}
}`,
  },
];

// In the press / recognition. type ∈ 'award' | 'media' | 'talk' | 'grant'
const NEWS = [
  {  date: '2025-08-28',  type: 'award',   title: 'Best Paper Award - ASONAM 2025',   detail: 'Received the Best Paper Award at the IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2025) for the paper "TrendScope: A Temporal Hypergraph Framework for Food Trend Discovery."',  source: 'ASONAM' },
  { date: '2023-02-06', type: 'media', title: 'VT News covered our ASONAM 2022 Best Paper', detail: 'Sanghani Center research takes a new approach to analyze depression and anxiety from Reddit posts to provide better care and lower the suicide rate.', source: 'Virginia Tech', link: 'https://sanghani.cs.vt.edu/news/news-person/?psn=3963' },
  { date: '2022-10-01', type: 'award', title: 'Best Paper Award - ASONAM 2022', detail: 'Received the Best Paper Award for the paper "Predicting Depression and Anxiety on Reddit: A Multi-task Learning Approach."', source: 'ASONAM' },
  { date: '2018-08-01', type: 'media', title: 'NYT coverage of our “Weaponized Health Communication” paper', detail: 'Russian trolls used the vaccine debate to sow discord, a study found.', source: 'The New York Times', link: 'https://www.nytimes.com/2018/08/23/health/russian-trolls-vaccines.html' },
];

const SERVICE = [
  { role: 'Session Co-Chair', detail: 'IEEE Big Data 2024 AI4Science · ASONAM 2025 & 2026 PhD Track' },
  { role: 'Program Committee Member', detail: 'IEEE Big Data MLBD 2024 · MLBD 2025 · AIES 2026 · JCDL (2025-2026) · CIKM 2026 · ICWSM 2026 · WWW 2026' },
  { role: 'Conference Reviewer', detail: 'EMNLP (2021-2024,2026) · IEEE Big Data (2021-2025) · ASONAM (2023-2026) · ArabicNLP 2026 · ACML 2026' },
  { role: 'Journal Reviewer', detail: 'ACM TALLIP · ACM TAKDD · Frontiers in Big Data · Frontiers in AI · ACM TSAS' },
  { role: 'Volunteer', detail: 'PAKDD 2021 Virtual Conference Coordination' },
];

const TEACHING = [
  'Discrete Mathematics',
  'Algorithms Design and Analysis',
  'Introduction to Python',
  'Data Mining',
  'Artificial Intelligence',
  'Information Visualization',
  'Introduction to Machine Learning',
  'Generative AI and Arabic NLP',
];

if (typeof window !== 'undefined') {
  window.CV_DATA = { PROFILE, EDUCATION, AREAS, PUBLICATIONS, NEWS, SERVICE, TEACHING, EXPERIENCE, AWARDS, SKILLS, LANGUAGES };
}
