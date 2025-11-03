---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium
        shape: circle
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I'm an Assistant Professor of Computer Science at Kuwait University. My research focuses on developing innovative models with practical applications in social media analytics, behavioral modeling, and public health.
        
        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of graph-based models and Deep Learning in understanding and interpreting the complexities of human language and online behavior, with a specific interest in low-resource languages.

        Please reach out to collaborate 😃
    design:
      columns: '1'
      # --- Featured ---
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2

# --- Recent Publications (All) ---
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  # --- Service ---
  - block: markdown
    content:
      title: '💼 Service'
      subtitle: ''
      text: |-
         - **Program Committee Member** IEEE Big Data MLBD 2024, MLBD 2025
         - **Program Committee Member** IEEE Big Data MLBD 2024, MLBD 2025
         - **Session Co-Chair** IEEE Big Data 2024 AI4Science, ASONAM 2025 PhD Track Program Committee, ASONAM 2026 PhD Track Program Committee   
         - **Conference Reviewer** EMNLP (2021–2024), IEEE Big Data (2021–2025), ASONAM (2023–2026), JCDL 2025  
         - **Journal Reviewer** ACM TALLIP, ACM TAKDD, Frontiers in Big Data, Frontiers in AI
         - **Volunteer** PAKDD 2021 Virtual Conference Coordination 
        # REPHRASE - **Workshop** Given to Kuwait Ministry of Commerce and Industry Artificial intelligence for innovation and quality of government services
    design:
      columns: '1'


#📖
# --- Courses ---
  - block: markdown
    content:
      title: '📖 Teaching'
      subtitle: ''
      text: |-
         - **📗 Discrete Math** 
         - **📘 Data Mining** 
         - **📘 Artificial intelligence**    
         - **📘 Information Visualization**   
         - **📗 Introduction to Python** 
       #  - **📘 Machine Learning** 
       #  - **📙 Algorithm Design and Analysis**
    design:
      columns: '1'
# --- News ---
 # - block: collection
  #  id: news
   # content:
    #  title: Recent News
     # subtitle: ''
      #text: ''
      #filters:
       # folders:
        #  - events
        #exclude_featured: false
    #design:
     # view: citation
---
