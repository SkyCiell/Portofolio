export const IDENTITY = {
  name: 'M. Raffi Barzally',
  alias: 'SkyCiell',
  role: 'Software Engineer & UI Systems Architect',
  school: 'SMK Taruna Bhakti',
  department: 'Rekayasa Perangkat Lunak (RPL)',
  location: 'Depok, West Java, Indonesia',
  coordinates: '6.3900° S, 106.8300° E',
  manifesto: 'Saya adalah seorang pelajar yang sangat tertarik dalam dunia pengembangan perangkat lunak dan desain antarmuka. Selalu berusaha menciptakan solusi yang fungsional, estetis, dan berdampak.',
  captionFilename: 'Rapiganteng.jpeg',
  captionQuote: 'Moments of clarity in the middle of chaos.',
  portraitImg: '/img/Rapiganteng1.jpeg',
  email: 'raffi.barzally@gmail.com',
  github: 'https://github.com/SkyCiell',
  instagram: 'https://www.instagram.com/piraapiiii',
  linkedin: 'https://www.linkedin.com/in/raffi-barzally-a18979382',
};

export const TELEMETRY_STRIP = [
  { label: 'EXPERIENCE', value: 'RPL 2024 – Present' },
  { label: 'SYSTEMS BUILT', value: '4+ Production Repos' },
  { label: 'PRIMARY STACK', value: 'React 19 & React Native' },
  { label: 'LOCATION', value: 'Depok [6.39°S 106.83°E]' },
];

export const ABOUT_MODULES = {
  intro: 'Building digital experiences with modular code architecture, editorial precision, and refined interaction quality.',
  education: {
    school: 'SMK Taruna Bhakti',
    major: 'Rekayasa Perangkat Lunak (RPL)',
    years: '2024 – Present',
    desc: 'Fokus mempelajari struktur data, algoritma pemrograman, arsitektur database relasional, serta pengembangan Web & Mobile App modern.',
  },
  focus: [
    'Frontend Architecture (React 19, Vite, Tailwind CSS)',
    'Mobile Systems (React Native & Expo Ecosystems)',
    'Modular System Design & RESTful APIs',
  ],
  interests: [
    'Audio Engineering & Music Player APIs',
    'Custom PC Building & Hardware TDP Architecture',
    'Japanese Minimalist & Editorial UI Design',
  ],
  goals: 'Deliver scalable software solutions that merge high performance with timeless, editorial design aesthetics.',
};

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Architecture',
    skills: [
      { name: 'React 19', level: 'Apex', desc: 'Component state, custom hooks, context, dynamic rendering.' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Async/await, DOM APIs, ES modules, state patterns.' },
      { name: 'Vite', level: 'Proficient', desc: 'Fast dev environment, bundling, path alias setup.' },
      { name: 'HTML5 & CSS3', level: 'Mastery', desc: 'Semantic layouts, CSS custom properties, grid & flex systems.' },
    ],
  },
  {
    category: 'Mobile Systems',
    skills: [
      { name: 'React Native', level: 'Advanced', desc: 'Cross-platform iOS/Android views, native gestures, styling.' },
      { name: 'Expo', level: 'Proficient', desc: 'Managed workflow, device APIs, mobile application builds.' },
    ],
  },
  {
    category: 'Backend & Services',
    skills: [
      { name: 'Node.js', level: 'Proficient', desc: 'Server runtime, async event handling, module resolution.' },
      { name: 'Express.js', level: 'Proficient', desc: 'RESTful API routing, middleware controllers, JSON payloads.' },
    ],
  },
  {
    category: 'Database & Data',
    skills: [
      { name: 'MySQL', level: 'Proficient', desc: 'Relational database schema modeling, queries, foreign keys.' },
      { name: 'REST APIs', level: 'Advanced', desc: 'Async fetch requests, HTTP payload contracts, error states.' },
    ],
  },
  {
    category: 'Engineering Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', desc: 'Version control, branch management, pull requests.' },
      { name: 'VS Code & Figma', level: 'Proficient', desc: 'IDE workflows, layout specs, visual asset exports.' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'buildforge',
    code: 'PROJECT // 01',
    title: 'BuildForge Configurator',
    subtitle: 'Platform Konfigurator PC Interaktif Premium',
    image: '/img/BuildForge-removebg-preview.png',
    overview: 'Platform konfigurator PC interaktif premium untuk gamer dan profesional. Mengintegrasikan kalkulasi daya (TDP) otomatis dan rekomendasi PSU cerdas.',
    techStack: ['React 19', 'Express.js', 'MySQL', 'Vite', 'Tailwind CSS', 'REST API'],
    challenges: 'Validating dynamic motherboard socket compatibility across complex CPU & RAM generations without layout lag.',
    solution: 'Designed an optimized MySQL relational schema paired with Express controller caching for real-time TDP wattage calculation.',
    features: [
      'Smart PSU TDP wattage calculator & bottleneck warning engine',
      'Motherboard socket & form factor compatibility validation',
      'Real-time component price breakdown & budget estimator',
      'Build summary configuration export',
    ],
    github: 'https://github.com/SkyCiell/BuildForge',
    demo: 'https://github.com/SkyCiell/BuildForge',
  },
  {
    id: 'music-player',
    code: 'PROJECT // 02',
    title: 'Web Music Player',
    subtitle: 'Pemutar Musik Web Real-time Audio State',
    image: '/img/MusicPlayer-removebg-preview.png',
    overview: 'Pemutar musik berbasis web dengan state audio real-time, animasi UI yang mulus, dan visual yang interaktif.',
    techStack: ['JavaScript ES6+', 'HTML5 Audio API', 'CSS Animations', 'DOM State'],
    challenges: 'Synchronizing track playback progress with HTML5 Audio events seamlessly without UI frame drops.',
    solution: 'Engineered an event-driven audio listener architecture paired with lightweight CSS keyframes.',
    features: [
      'Real-time track seek bar seeking & time formatting',
      'Playlist queue manager & track switching state',
      'Audio volume control & playback controls',
      'Minimalist dark aesthetic interface',
    ],
    github: 'https://github.com/SkyCiell/MusicPlayer',
    demo: 'https://skyciell.github.io/Portofolio',
  },
  {
    id: 'project-ass',
    code: 'PROJECT // 03',
    title: 'Project-ass (Portal Lapor)',
    subtitle: 'Sistem Pengaduan Masyarakat Multi-Platform',
    image: '/img/Project-ass-removebg-preview.png',
    overview: 'Sistem pengaduan masyarakat berbasis fullstack multi-platform. Menghubungkan admin panel web dengan aplikasi mobile masyarakat secara real-time.',
    techStack: ['Next.js', 'React Native', 'Expo', 'REST API', 'MySQL', 'Node.js'],
    challenges: 'Maintaining synchronized ticket status updates between Web Admin dashboards and Mobile App clients.',
    solution: 'Engineered a unified REST API backend service handling authenticated web and mobile payload endpoints.',
    features: [
      'Citizen ticket submission with photo attachments & geolocation',
      'Web admin ticket assignment & priority status management',
      'Real-time status notifications & push alerts',
      'Verified RPL competency score 87 certification system',
    ],
    github: 'https://github.com/SkyCiell/Project-ass',
    demo: 'https://github.com/SkyCiell/Project-ass',
  },
  {
    id: 'revera',
    code: 'PROJECT // 04',
    title: 'Revera Web Architecture',
    subtitle: 'Repositori Open-Source System Architecture',
    image: '/img/jawajawa.png',
    overview: 'Repositori open-source arsitektur modular Revera yang didesain secara rapi untuk skalabilitas komponen dan kemudahan integrasi sistem.',
    techStack: ['React', 'Modular Code', 'GitHub Workflow', 'Clean Code'],
    challenges: 'Enforcing strict component decoupling boundaries while preserving developer ergonomics.',
    solution: 'Developed clean atomic file structures and thorough architectural documentation.',
    features: [
      'Decoupled reusable UI module system',
      'Zero-dependency utility helpers',
      'Standardized clean code conventions',
      'Open-source public GitHub repository',
    ],
    github: 'https://github.com/SkyCiell/Revera',
    demo: 'https://github.com/SkyCiell/Revera',
  },
];

export const EXPERIENCE = [
  {
    year: '2024',
    title: 'Masuk Jurusan RPL SMK Taruna Bhakti',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Rekayasa Perangkat Lunak (RPL)',
    description: 'Memulai pendidikan di SMK Taruna Bhakti jurusan RPL. Mempelajari logika pemrograman, struktur data, HTML5, CSS3, dan konsep dasar database relasional.',
    highlights: [
      'Logika & algoritma dasar pemrograman',
      'Pemodelan basis data relasional (MySQL)',
      'Pengembangan web dasar (HTML5, CSS3, Vanilla JS)',
    ],
  },
  {
    year: '2025',
    title: 'Pengembangan Aplikasi Web & Mobile',
    organization: 'SMK Taruna Bhakti (Lab RPL)',
    department: 'Web & Mobile Application',
    description: 'Mendalami framework modern seperti React dan React Native. Mengembangkan proyek pengaduan masyarakat (Project-ass / Portal Lapor) serta mengikuti Uji Kompetensi Keahlian (UKK).',
    highlights: [
      'Pengembangan aplikasi mobile dengan React Native & Expo',
      'Pembuatan REST API sederhana dengan Express.js',
      'Sertifikasi Uji Kompetensi RPL (Nilai 89 & 87)',
    ],
  },
  {
    year: '2026',
    title: 'Pengembangan Proyek Portofolio & Frontend',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Frontend Engineering & Web Development',
    description: 'Fokus memperdalam Frontend Engineering, membangun aplikasi web interaktif seperti BuildForge PC Configurator, Web Music Player, dan mempercantik sistem UI.',
    highlights: [
      'Pengembangan BuildForge PC Configurator',
      'Pengembangan Web Music Player & UI Interaktif',
      'Penerapan clean code dan desain antarmuka modern',
    ],
  },
];

export const CERTIFICATES = [
  {
    id: 'ecommerce',
    code: 'CERTIFICATE // 01',
    title: 'RPL Competency Test — E-Commerce Systems',
    score: 89,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    year: '2025',
    description: 'Verified industry-standard certification for designing, architecting, and building structured E-Commerce platforms.',
    criteria: [
      'Relational database schema design for e-commerce',
      'Cart management & product catalog state',
      'Checkout flow & response handling',
      'Clean responsive layout standards',
    ],
  },
  {
    id: 'multiplatform',
    code: 'CERTIFICATE // 02',
    title: 'RPL Competency Test — Multi Platform Systems',
    score: 87,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    year: '2025',
    description: 'Verified competency certification for engineering the Portal Lapor civic complaint system spanning Mobile Applications and REST API integration.',
    criteria: [
      'React Native & Mobile App architecture',
      'RESTful API microservice endpoint design',
      'Geo-location tagging & media upload pipelines',
      'Role-based JWT authentication flows',
    ],
  },
];
