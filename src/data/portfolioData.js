export const IDENTITY = {
  name: 'M. Raffi Barzally',
  alias: 'SkyCiell',
  role: 'Frontend Engineering & Mobile Systems Development',
  school: 'SMK Taruna Bhakti',
  department: 'Rekayasa Perangkat Lunak (RPL)',
  location: 'Depok, West Java, Indonesia',
  coordinates: 'DEPOK [6.3900° S, 106.8300° E]',
  timezone: 'WIB (GMT+7)',
  manifesto: 'Software architecture is not merely functional logic; it is the deliberate curation of structural aesthetics, component modularity, and human-centered interaction.',
  captionFilename: 'Rapiganteng.jpeg',
  captionQuote: 'Moments of clarity in the middle of chaos.',
  portraitImg: '/img/Rapiganteng1.jpeg',
  email: 'raffi.barzally@gmail.com',
  intro: 'RPL Student at SMK Taruna Bhakti specializing in modular web architecture and cross-platform mobile systems development.',
  github: 'https://github.com/SkyCiell',
  instagram: 'https://www.instagram.com/piraapiiii',
  linkedin: 'https://www.linkedin.com/in/raffi-barzally-a18979382',
};

export const NAVIGATION_CHAPTERS = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Work' },
  { id: 'skills', title: 'Skills' },
  { id: 'resume', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const TELEMETRY_STRIP = [
  { label: 'INSTITUTION', value: 'SMK Taruna Bhakti Depok' },
  { label: 'VERIFIED UKK SCORES', value: '89 & 87 / 100' },
  { label: 'PRIMARY STACK', value: 'React 19 & React Native' },
  { label: 'COORDINATES', value: '6.3900° S, 106.8300° E' },
];

export const HERO_METADATA = [
  { title: 'EDITORIAL AESTHETIC', desc: 'Strict editorial contrast of metallic bronze and charcoal space.' },
  { title: 'MODULAR ARCHITECTURE', desc: 'Decoupled, reusable component structures with custom state logic.' },
  { title: 'MOBILE & AUDIO APIs', desc: 'React Native & Expo views paired with native HTML5 audio engines.' },
  { title: 'PERFORMANCE FIRST', desc: 'Optimized rendering lifecycles with zero layout thrashing.' },
];

export const MANIFESTO_MODULES = [
  {
    title: 'Component Decoupling',
    desc: 'Building scalable web systems with isolated component scopes, clean prop interfaces, and declarative React 19 state containers.',
  },
  {
    title: 'Fullstack & Mobile Integration',
    desc: 'Spanning cross-platform mobile apps with React Native & Expo to robust RESTful Express.js backend services and MySQL schemas.',
  },
  {
    title: 'RPL Academic Mastery',
    desc: 'Enrolled in Software Engineering (RPL) at SMK Taruna Bhakti, achieving verified UKK competency test scores of 89 and 87.',
  },
  {
    title: 'Editorial Tactile Craft',
    desc: 'Blending Japanese minimalist magazine aesthetics with rigorous technical standards and high-speed user experience.',
  },
];

export const PROJECTS = [
  {
    id: 'buildforge',
    title: 'BuildForge Configurator',
    subtitle: 'Premium PC Builder Configurator',
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
    id: 'project-ass',
    title: 'Project-ass (Portal Lapor)',
    subtitle: 'Multi-Platform Civic Complaint System',
    image: '/img/Project-ass-removebg-preview.png',
    overview: 'Sistem pengaduan masyarakat berbasis fullstack multi-platform. Menghubungkan admin panel web dengan aplikasi mobile masyarakat secara real-time.',
    techStack: ['Next.js', 'React Native', 'Expo', 'REST API', 'MySQL', 'Node.js'],
    challenges: 'Maintaining synchronized ticket status updates between Web Admin dashboards and Mobile App clients.',
    solution: 'Engineered a unified REST API backend service handling authenticated web and mobile payload endpoints.',
    features: [
      'Citizen ticket submission with photo attachments & geolocation',
      'Web admin ticket assignment & priority status management',
      'Real-time status notifications & push alerts',
      'Verified RPL competency test score 87 system',
    ],
    github: 'https://github.com/SkyCiell/Project-ass',
    demo: 'https://github.com/SkyCiell/Project-ass',
  },
  {
    id: 'music-player',
    title: 'Web Music Player',
    subtitle: 'Real-time HTML5 Audio State Player',
    image: '/img/MusicPlayer-removebg-preview.png',
    overview: 'Pemutar musik berbasis web dengan state audio real-time, animasi UI yang mulus, dan visual audio DOM state handling.',
    techStack: ['JavaScript ES6+', 'HTML5 Audio API', 'CSS Keyframes', 'DOM State'],
    challenges: 'Synchronizing track playback progress with HTML5 Audio events seamlessly without UI frame drops.',
    solution: 'Engineered an event-driven audio listener architecture paired with lightweight CSS keyframes.',
    features: [
      'Real-time track seek bar seeking & time formatting',
      'Playlist queue manager & track switching state',
      'Audio volume control & playback state listeners',
      'Minimalist editorial dark interface',
    ],
    github: 'https://github.com/SkyCiell/MusicPlayer',
    demo: 'https://skyciell.github.io/Portofolio',
  },
  {
    id: 'ddg-revera',
    title: 'DDG Project / Revera Architecture',
    subtitle: 'Modular Open-Source Architecture Repository',
    image: '/img/jawajawa.png',
    overview: 'Repositori open-source arsitektur modular Revera yang didesain secara rapi untuk skalabilitas komponen dan kemudahan integrasi sistem.',
    techStack: ['React', 'Modular Architecture', 'Clean Code', 'GitHub Workflow'],
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

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Architecture',
    skills: [
      { name: 'React 19', level: 'Apex', desc: 'Component state, custom hooks, context providers, dynamic rendering.' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Async/await, DOM event listeners, ES modules, state mutation handling.' },
      { name: 'Vite & Build Tools', level: 'Proficient', desc: 'HMR dev environment, asset bundling, path alias setup.' },
      { name: 'HTML5 & Modern CSS', level: 'Mastery', desc: 'Semantic layouts, CSS custom properties, grid & flex systems.' },
    ],
  },
  {
    category: 'Mobile Systems',
    skills: [
      { name: 'React Native', level: 'Advanced', desc: 'Cross-platform iOS/Android views, native touch gestures, flex styling.' },
      { name: 'Expo Framework', level: 'Proficient', desc: 'Managed workflow, device APIs, mobile application build pipelines.' },
    ],
  },
  {
    category: 'Backend & Services',
    skills: [
      { name: 'Node.js Runtime', level: 'Proficient', desc: 'Server environment, asynchronous event execution, module resolution.' },
      { name: 'Express.js', level: 'Proficient', desc: 'RESTful API routing controllers, JSON request handlers, middleware.' },
    ],
  },
  {
    category: 'Database & Infrastructure',
    skills: [
      { name: 'MySQL Database', level: 'Proficient', desc: 'Relational database schema modeling, queries, foreign key constraints.' },
      { name: 'REST API Design', level: 'Advanced', desc: 'Async fetch requests, HTTP payload contracts, status codes.' },
    ],
  },
  {
    category: 'Engineering Standards',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', desc: 'Version control, branch workflows, commit standards.' },
      { name: 'Figma & UI Systems', level: 'Proficient', desc: 'Typography grids, component spec files, visual asset handoffs.' },
    ],
  },
];

export const ACADEMIC_TIMELINE = [
  {
    year: '2024',
    title: 'Admitted to RPL SMK Taruna Bhakti',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Rekayasa Perangkat Lunak (RPL)',
    description: 'Began software engineering education focusing on programming logic, data structures, HTML5/CSS3, and relational database fundamentals.',
    highlights: [
      'Programming logic & algorithmic problem solving',
      'Relational database schema design with MySQL',
      'Fundamental web layouts with HTML5 & modern CSS',
    ],
  },
  {
    year: '2025',
    title: 'Web & Mobile Systems Engineering',
    organization: 'SMK Taruna Bhakti (RPL Laboratory)',
    department: 'Web & Mobile Application Development',
    description: 'Engineered fullstack systems including the Portal Lapor complaint platform (Project-ass) and achieved verified UKK competency test scores of 89 and 87.',
    highlights: [
      'Mobile development with React Native & Expo',
      'REST API controllers with Express.js & Node.js',
      'Verified RPL UKK Competency Certifications (Scores 89 & 87)',
    ],
  },
  {
    year: '2026',
    title: 'Editorial Systems & Portfolio Monograph',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Frontend Engineering & Systems Architecture',
    description: 'Focusing on high-end frontend architecture, building BuildForge PC Configurator, Web Music Player, and publishing editorial systems monographs.',
    highlights: [
      'BuildForge PC Configurator TDP calculation engine',
      'Web Music Player Audio API state synchronization',
      'Editorial design design system & clean architecture',
    ],
  },
];

export const COMPETENCY_SCORES = [
  {
    id: 'ecommerce-score',
    title: 'RPL Competency Test — E-Commerce Systems',
    score: 89,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    year: '2025',
    description: 'Verified industry-standard certification for architecting and developing structured E-Commerce web platforms.',
    criteria: [
      'Relational database schema modeling for e-commerce',
      'Cart state management & catalog data structures',
      'Checkout API response handling & status checks',
      'Clean responsive layout standards',
    ],
  },
  {
    id: 'multiplatform-score',
    title: 'RPL Competency Test — Multi-Platform Systems',
    score: 87,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    year: '2025',
    description: 'Verified competency certification for engineering the Portal Lapor civic complaint system spanning Mobile Applications and REST API backend integration.',
    criteria: [
      'React Native & Mobile App architecture',
      'RESTful API microservice endpoint design',
      'Photo attachment handling & payload specs',
      'Role-based authentication & ticket management',
    ],
  },
];
