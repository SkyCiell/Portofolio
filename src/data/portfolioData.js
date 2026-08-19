export const PROFILE = {
  name: 'Muhammad Raffi Barzally',
  username: 'SkyCiell',
  role: 'Frontend & Mobile Systems Developer',
  stack: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  bio: 'Software Engineering (RPL) student at SMK Taruna Bhakti. Passionate about building modern, component-driven web applications and cross-platform mobile products.',
  avatar: '/img/Rapiganteng1.jpeg',
  location: 'Depok, West Java, Indonesia',
  company: 'SMK Taruna Bhakti Depok',
  website: 'https://skyciell.github.io/Portofolio',
  github: 'https://github.com/SkyCiell',
  linkedin: 'https://www.linkedin.com/in/raffi-barzally-a18979382',
  instagram: 'https://www.instagram.com/piraapiiii',
  email: 'raffi.barzally@gmail.com',
  availableForWork: true,
};

export const NAV_TABS = [
  { id: 'overview', label: 'Overview', icon: 'BookOpen' },
  { id: 'projects', label: 'Projects', icon: 'Folder', count: 4 },
  { id: 'skills', label: 'Skills', icon: 'Cpu' },
  { id: 'experience', label: 'Experience', icon: 'Clock' },
  { id: 'certificates', label: 'Certificates', icon: 'Award', count: 2 },
];

export const README_DATA = {
  header: 'README.md',
  intro: 'Hi there, I\'m Muhammad Raffi Barzally 👋',
  overview: 'I am a Software Engineering (RPL) student at SMK Taruna Bhakti Depok specializing in modern Frontend Engineering and Mobile Application Development.',
  whatIBuild: [
    'Modular React 19 web applications with optimized rendering performance.',
    'Cross-platform mobile applications powered by React Native and Expo.',
    'RESTful backend microservices using Node.js, Express.js, and MySQL database schemas.',
    'High-fidelity user interface systems using Tailwind CSS and custom component tokens.',
  ],
  techStack: [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/PostCSS', 'SQL'] },
    { category: 'Frontend Frameworks', items: ['React 19', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Mobile & Backend', items: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MySQL'] },
    { category: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'npm/pnpm'] },
  ],
  interests: [
    'Custom PC Hardware TDP calculation & hardware configuration tools.',
    'Audio engineering DOM APIs & real-time HTML5 audio engines.',
    'Japanese minimalist software design and clean component architecture.',
  ],
};

export const PROJECTS = [
  {
    id: 'buildforge',
    name: 'BuildForge',
    fullName: 'SkyCiell/BuildForge',
    category: 'Fullstack',
    description: 'Interactive PC Builder Configurator platform for hardware enthusiasts and professionals with automated TDP wattage calculator and bottleneck detection.',
    longDescription: 'BuildForge is a fullstack interactive PC builder configurator. It automates dynamic motherboard socket validation, RAM generation check, real-time TDP wattage calculation, and budget breakdown.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    techStack: ['React 19', 'Express.js', 'MySQL', 'Vite', 'Tailwind CSS', 'REST API'],
    readme: `# BuildForge Configurator

Platform konfigurator PC interaktif premium untuk gamer dan profesional.

### Key Features
- **Smart PSU TDP Calculator**: Automatically checks total power draw against CPU + GPU TDP specs.
- **Form Factor & Socket Validation**: Validates dynamic motherboard socket compatibility.
- **Real-time Price Estimator**: Instant budget breakdown & configuration summary export.

### Tech Stack
- Frontend: React 19, Vite, Tailwind CSS
- Backend: Express.js, Node.js
- Database: MySQL relational schema`,
    features: [
      'Smart PSU TDP wattage calculator & bottleneck warning engine',
      'Motherboard socket & form factor compatibility validation',
      'Real-time component price breakdown & budget estimator',
      'Build summary configuration export',
    ],
    architecture: 'Express.js REST controllers with optimized MySQL relational query caching and React 19 state containers.',
    github: 'https://github.com/SkyCiell/BuildForge',
    demo: 'https://github.com/SkyCiell/BuildForge',
    image: '/img/BuildForge-removebg-preview.png',
    updatedAt: 'Updated 2 days ago',
  },
  {
    id: 'project-ass',
    name: 'Project-ass',
    fullName: 'SkyCiell/Project-ass',
    category: 'Mobile',
    description: 'Multi-platform civic complaint portal (Portal Lapor) connecting web admin dashboards with React Native mobile client applications in real-time.',
    longDescription: 'Fullstack complaint management ecosystem built for civic reporting. Features photo attachment handling, ticket status verification, web admin role-based authorization, and verified RPL UKK score 87 certification.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    techStack: ['Next.js', 'React Native', 'Expo', 'REST API', 'MySQL', 'Node.js'],
    readme: `# Project-ass (Portal Lapor)

Sistem pengaduan masyarakat berbasis fullstack multi-platform.

### Key Features
- **Citizen Ticket Submission**: Mobile submission with photo attachment pipelines and status tracking.
- **Web Admin Panel**: Role-based admin queue for ticket assignment and priority status verification.
- **Unified REST Backend**: Endpoint endpoints serving both web and mobile payloads seamlessly.`,
    features: [
      'Citizen ticket submission with photo attachments',
      'Web admin ticket assignment & priority status management',
      'Real-time status notifications & push alerts',
      'Verified RPL competency score 87 system',
    ],
    architecture: 'Unified Express/Next.js API gateway connected to React Native Expo mobile client and React web dashboard.',
    github: 'https://github.com/SkyCiell/Project-ass',
    demo: 'https://github.com/SkyCiell/Project-ass',
    image: '/img/Project-ass-removebg-preview.png',
    updatedAt: 'Updated 1 week ago',
  },
  {
    id: 'music-player',
    name: 'MusicPlayer',
    fullName: 'SkyCiell/MusicPlayer',
    category: 'Web',
    description: 'Real-time web audio player powered by HTML5 Audio API with custom audio visual state listeners and smooth playback animation controls.',
    longDescription: 'Lightweight web audio application demonstrating event-driven HTML5 Audio API listener architecture, seeking time formatting, playlist queue handling, and zero layout thrashing.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    techStack: ['JavaScript ES6+', 'HTML5 Audio API', 'CSS Keyframes', 'DOM State'],
    readme: `# Web Music Player

Pemutar musik berbasis web dengan state audio real-time dan animasi UI yang mulus.

### Key Features
- **Real-time Seek Bar**: Seamless progress seeking and formatted track timestamping.
- **Playlist Queue Manager**: Instant track switching with active playback listeners.
- **Minimalist Web Audio Engine**: Lightweight HTML5 Audio DOM integration.`,
    features: [
      'Real-time track seek bar seeking & time formatting',
      'Playlist queue manager & track switching state',
      'Audio volume control & playback state listeners',
      'Minimalist dark developer interface',
    ],
    architecture: 'Event-driven HTML5 Audio listener architecture paired with DOM state handlers.',
    github: 'https://github.com/SkyCiell/MusicPlayer',
    demo: 'https://skyciell.github.io/Portofolio',
    image: '/img/MusicPlayer-removebg-preview.png',
    updatedAt: 'Updated 2 weeks ago',
  },
  {
    id: 'revera',
    name: 'Revera',
    fullName: 'SkyCiell/Revera',
    category: 'Web',
    description: 'Modular open-source architecture repository designed for component decoupling, clean code structure, and rapid UI scaling.',
    longDescription: 'Open-source system template providing decoupled atomic React components, zero-dependency helper utilities, and standardized clean code conventions.',
    language: 'CSS',
    languageColor: '#563d7c',
    techStack: ['React', 'Modular Architecture', 'Clean Code', 'GitHub Workflow'],
    readme: `# Revera Web Architecture

Open-source modular component library and structural code convention repository.

### Key Features
- **Decoupled Module Boundaries**: Reusable component design patterns.
- **Zero-Dependency Utilities**: Lightweight helper functions.
- **Clean Code Standard**: Strict file hierarchy and developer ergonomics.`,
    features: [
      'Decoupled reusable UI module system',
      'Zero-dependency utility helpers',
      'Standardized clean code conventions',
      'Open-source public GitHub repository',
    ],
    architecture: 'Atomic component design pattern with clean prop interface separation.',
    github: 'https://github.com/SkyCiell/Revera',
    demo: 'https://github.com/SkyCiell/Revera',
    image: '/img/jawajawa.png',
    updatedAt: 'Updated 1 month ago',
  },
];

export const SKILL_GROUPS = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript', type: 'Language' },
      { name: 'TypeScript', icon: 'typescript', type: 'Language' },
      { name: 'HTML5', icon: 'html5', type: 'Markup' },
      { name: 'CSS3', icon: 'css3', type: 'Stylesheet' },
      { name: 'SQL', icon: 'database', type: 'Query Language' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React 19', icon: 'react', type: 'Frontend' },
      { name: 'React Native', icon: 'mobile', type: 'Mobile' },
      { name: 'Next.js', icon: 'nextjs', type: 'Fullstack' },
      { name: 'Expo', icon: 'expo', type: 'Mobile Framework' },
      { name: 'Tailwind CSS', icon: 'tailwind', type: 'Styling' },
      { name: 'Express.js', icon: 'express', type: 'Backend Framework' },
      { name: 'Node.js', icon: 'nodejs', type: 'Runtime' },
      { name: 'Vite', icon: 'vite', type: 'Build Tool' },
    ],
  },
  {
    name: 'Database & Developer Tools',
    skills: [
      { name: 'MySQL', icon: 'mysql', type: 'Relational Database' },
      { name: 'REST APIs', icon: 'api', type: 'Protocol' },
      { name: 'Git & GitHub', icon: 'git', type: 'Version Control' },
      { name: 'Figma', icon: 'figma', type: 'UI/UX Design' },
      { name: 'VS Code', icon: 'vscode', type: 'IDE' },
    ],
  },
];

export const EXPERIENCE = [
  {
    year: '2026',
    role: 'Frontend Engineering & Portofolio Redesign',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Web Development',
    description: 'Developing high-performance React 19 web applications including BuildForge PC Configurator, Web Music Player, and GitHub-inspired portfolio architecture.',
    technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Lenis', 'Git'],
  },
  {
    year: '2025',
    role: 'Web & Mobile Systems Engineering',
    organization: 'SMK Taruna Bhakti (RPL Laboratory)',
    department: 'Fullstack Systems',
    description: 'Engineered Portal Lapor civic complaint platform (Project-ass) connecting React Native mobile clients with RESTful Express.js backends. Achieved verified UKK scores of 89 and 87.',
    technologies: ['React Native', 'Expo', 'Express.js', 'MySQL', 'REST API'],
  },
  {
    year: '2024',
    role: 'Admitted to RPL SMK Taruna Bhakti',
    organization: 'SMK Taruna Bhakti Depok',
    department: 'Software Engineering',
    description: 'Began software engineering education studying core data structures, programming logic, relational MySQL modeling, and semantic HTML5/CSS3 web design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Algorithms'],
  },
];

export const CERTIFICATES = [
  {
    id: 'cert-01',
    name: 'RPL Competency Test — E-Commerce Systems',
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    score: 89,
    maxScore: 100,
    year: '2025',
    description: 'Verified industry-standard certification for designing, architecting, and building relational database-driven E-Commerce platforms.',
    skills: ['MySQL Schema', 'Cart State', 'Checkout APIs', 'Responsive Layouts'],
    link: 'https://github.com/SkyCiell/Portofolio',
  },
  {
    id: 'cert-02',
    name: 'RPL Competency Test — Multi-Platform Systems',
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    score: 87,
    maxScore: 100,
    year: '2025',
    description: 'Verified competency certification for engineering the Portal Lapor civic complaint platform spanning Mobile Applications and REST API integration.',
    skills: ['React Native', 'Mobile Architecture', 'RESTful Endpoints', 'Photo Attachment Pipelines'],
    link: 'https://github.com/SkyCiell/Project-ass',
  },
];
