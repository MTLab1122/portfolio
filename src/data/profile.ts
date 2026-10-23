// Central content file — edit this to update the whole site.
// Everything the components render lives here, typed, so changing
// text never means touching markup.

export const person = {
  name: "Muhammad Talha",
  role: "Software Engineer & Web Developer",
  location: "Charsadda, Khyber Pakhtunkhwa, Pakistan",
  email: "muhammadtalhapro1@gmail.com",
  phone: "+92 347 2937773",
  whatsapp: "https://wa.me/923472937773",
  timezone: "Asia/Karachi",
  availability: "Available for remote work & selected projects",
  github: "https://github.com/MTLab1122",
  githubUsername: "MTLab1122",
  linkedin: "https://www.linkedin.com/in/mtlabs1122/",
  productionUrl: "https://talha-portfolio-gules.vercel.app",
  resumeUrl: "/Muhammad-Talha-Resume.pdf",
  photo: "/images/profile-photo.png",
  photoAlt: "Muhammad Talha portrait",
  siteName: "Muhammad Talha",
  seoTitle: "Muhammad Talha | Software Engineer & Frontend Specialist Portfolio",
  seoDescription:
    "Muhammad Talha is a software engineering student and developer in Charsadda, Khyber Pakhtunkhwa, Pakistan, building high-speed web systems with Astro, Next.js, TypeScript, Python, and AI automation.",
  keywords: [
    "Muhammad Talha",
    "MTLab1122",
    "software engineer Pakistan",
    "software engineering student Abasyn",
    "frontend developer Khyber Pakhtunkhwa",
    "web developer Charsadda",
    "Astro developer",
    "Next.js developer",
    "Python AI agent automation",
    "full stack developer Pakistan",
    "technical SEO web developer",
  ],
  summary:
    "Software Engineering student at Abasyn University Peshawar (CGPA 3.87) and self-taught full-stack developer based in Charsadda, KP, Pakistan. Experienced in building high-speed static web architectures with Astro and TypeScript, full-stack React/Next.js systems, autonomous Python intelligence agents with Google Gemini API, and telemetry data visualization systems with Flask and Plotly Dash. Passionate about software craftsmanship, accessible UI systems, performance optimization, and pragmatic AI automation.",
};

export const stats = [
  { value: "3.87", label: "CGPA, Software Engineering", suffix: "/4.0" },
  { value: "56", label: "GitHub Repositories Audited", suffix: "" },
  { value: "5+", label: "Internships & Technical Programs", suffix: "" },
  { value: "100%", label: "Core Web Vitals & Accessibility", suffix: "" },
];

export const skills = {
  "Languages & Frameworks": [
    "TypeScript",
    "JavaScript",
    "Astro",
    "Next.js 14",
    "Python",
    "Flask",
    "Node.js",
    "Express",
    "Tailwind CSS v4",
    "HTML5 / Semantic Web",
    "CSS3 / Grid & Flexbox",
    "SQLAlchemy & SQLite",
    "MongoDB",
  ],
  "AI & Automation": [
    "Autonomous AI Agents",
    "Google Gemini GenAI SDK",
    "GitHub Actions Automation",
    "Web Scraping (BeautifulSoup / Requests)",
    "Pydantic Validation",
    "ReportLab Vector PDF Generation",
    "OpenPyXL Data Workbooks",
    "Resend Email Dispatch",
  ],
  "Data & Visualization": [
    "Plotly Dash",
    "Pandas & NumPy",
    "Mathematical Diurnal Modeling",
    "US EPA AQI Calculation",
    "Radar Matrix Visualization",
    "REST API Architecture",
  ],
  "Design & UI Craft": [
    "Figma UI/UX",
    "Design Systems & Tokens",
    "GSAP Motion & Timelines",
    "Accessible HTML (WCAG 2.2 AA)",
    "Corel Draw",
    "Photoshop",
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "Vite",
    "Pytest & Test Suites",
    "Vercel Deployment",
    "Technical SEO & Schema.org",
    "Windows Task Scheduler & PowerShell",
  ],
  "Currently Exploring": [
    "Advanced Next.js App Router Architecture",
    "Multi-Agent AI Coordination Systems",
    "Edge Compute & Cloudflare Workers",
  ],
};

export type Project = {
  slug: string;
  title: string;
  category: "AI & Systems" | "Full Stack" | "Frontend";
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  architecture: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  role: string;
  year: string;
  href?: string;
  repo: string;
  featured?: boolean;
  score: number;
  keyFeatures: string[];
  testNotes?: string;
};

export const projects: Project[] = [
  {
    slug: "scholorships-intelligence-agent",
    title: "KP & Charsadda Scholarship Intelligence Agent",
    category: "AI & Systems",
    tagline: "Autonomous multi-tier AI crawler, verification pipeline, and automated multi-format reporting system.",
    description:
      "An automated, autonomous AI agent that crawls, verifies, organizes, and reports scholarship, fee-waiver, grant, and interest-free loan opportunities for students in Khyber Pakhtunkhwa with dedicated priority for Charsadda district and regional institutions. Executes daily at 07:00 PKT via GitHub Actions with Resend email delivery.",
    problem:
      "Students across Khyber Pakhtunkhwa and Charsadda regularly miss higher education grants, fee waivers, and provincial welfare schemes because announcements are scattered across disconnected university websites, newspaper clippings, and misleading social media posts.",
    approach:
      "Architected a multi-tier trust model (Tier 1 official .gov/.edu, Tier 2 official secondary, Tier 3 unverified discovery) with Google Gemini AI structured extraction, fuzzy deduplication (ratio >= 0.88), verbatim quote extraction, and automated generation of 4 distinct daily report formats.",
    architecture:
      "Modular Python pipeline: settings/sources YAML loader -> HTTP fetcher with link verification -> Gemini GenAI client (with offline fallback heuristics) -> Pydantic schemas -> Fuzzy deduplicator & 30-day retention engine -> 4 document compilers (Interactive HTML dashboard, ReportLab vector PDF with NumberedCanvas, OpenPyXL XLSX workbook, UTF-8-SIG CSV) -> Resend HTTP API dispatcher.",
    outcome:
      "A fully autonomous, zero-maintenance intelligence pipeline providing daily verified summaries directly to students and advisors, eliminating fraudulent listings and ensuring deadline awareness across all major KP universities.",
    metrics: [
      { label: "Report Formats", value: "4 Formats" },
      { label: "Verification Tiers", value: "3 Trust Tiers" },
      { label: "Daily Schedule", value: "07:00 PKT" },
    ],
    tags: ["Python", "Google Gemini AI", "GitHub Actions", "Pydantic", "ReportLab", "Resend API"],
    role: "Creator & Lead Developer",
    year: "2026",
    repo: "https://github.com/MTLab1122/scholorships_agent",
    featured: true,
    score: 4.64,
    keyFeatures: [
      "Dual daily reports: Public-University Report and Private-University Report",
      "Four downloadable output formats: HTML dashboard, Vector PDF, Multi-sheet Excel, and CSV",
      "Three-tier source hierarchy distinguishing official government sources from unverified aggregators",
      "Verbatim source quotes (up to 300 characters) preserved to prevent AI hallucinations",
      "Automated HTTP link validation testing all application URLs before inclusion",
      "Fuzzy string similarity deduplication (ratio >= 0.88) and 30-day retention policies",
    ],
    testNotes: "Automated execution via daily GitHub Actions workflow (`daily_scholarship_agent.yml`) with test suite in `tests/`.",
  },
  {
    slug: "campus-telemetry-visualization",
    title: "Campus Environment Data Visualization System",
    category: "Full Stack",
    tagline: "Full-stack Python telemetry platform with Plotly Dash analytics, EPA AQI indexing, and multi-zone surveillance.",
    description:
      "Full-stack Python system engineered to ingest, store, process, analyze, and visualize ambient and indoor environmental telemetry across 8 university campus zones. Features a Flask WSGI core, embedded Plotly Dash interactive dashboards, SQLAlchemy ORM, and automated alert resolution.",
    problem:
      "Modern universities host thousands of students in enclosed lecture halls, crowded study libraries, cafeterias, and high-traffic gates where poor ventilation (CO2 > 1000 ppm, fine particulates PM2.5) and acoustic pollution degrade cognitive performance and student health, yet manual spot-checks fail to detect acute spikes.",
    approach:
      "Engineered an end-to-end Python monitoring ecosystem with mathematical diurnal atmospheric simulation models, dynamic EPA piecewise linear interpolation for AQI calculation, ASHRAE thermal comfort indices, 5-axis normalized radar matrices, and role-based access control.",
    architecture:
      "Dual-engine Python architecture combining Flask WSGI routing and REST API endpoints (`/api/zones`, `/api/sensors`, `/api/readings`, `/api/alerts`) with reactive Plotly Dash components (`/dashboard/`). Backed by SQLAlchemy 2.0 ORM, SQLite embedded database, Pandas aggregations, and Flask-Login authentication.",
    outcome:
      "A complete, publication-grade environmental analytics dashboard deployed live on GitHub Pages with 27 unit and integration tests executing seamlessly in pytest, seed scripts for 7+ days of synthetic telemetry, and instant CSV reporting.",
    metrics: [
      { label: "Campus Zones", value: "8 Zones" },
      { label: "Pytest Tests", value: "27 Passed" },
      { label: "Sensed Metrics", value: "7 Parameters" },
    ],
    tags: ["Python", "Flask", "Plotly Dash", "SQLAlchemy", "Pandas", "Pytest"],
    role: "Full-Stack Engineer",
    year: "2026",
    href: "https://mtlab1122.github.io/Campus_Environment_DataVisualization_System/",
    repo: "https://github.com/MTLab1122/Campus_Environment_DataVisualization_System",
    featured: true,
    score: 4.60,
    keyFeatures: [
      "Role-Based Access Control (RBAC) with secure Admin sensor management and Public dashboard views",
      "Campus Environmental Health Index (CEHI) weighted grading (A+ to F) evaluating AQI, acoustics, and comfort",
      "Dynamic US EPA Air Quality Index (AQI) piecewise linear interpolation for PM2.5 and PM10",
      "Multi-dimensional Plotly 5-axis spider radar matrix comparing 8 campus zones simultaneously",
      "Synthetic sensor telemetry engine modeling solar diurnal curves and class occupancy spikes",
      "Interactive REST API documentation and query explorer console (`/api/docs`)",
    ],
    testNotes: "27 unit and integration tests passing via pytest covering models, REST API endpoints, and Dash callbacks.",
  },
  {
    slug: "pac-man-arcade-engine",
    title: "Modern Pac-Man Arcade Engine",
    category: "Frontend",
    tagline: "High-performance arcade recreation built with Next.js 14, TypeScript, and autonomous ghost AI state machines.",
    description:
      "Interactive browser recreation of the classic arcade game Pac-Man built from scratch using Next.js 14 App Router, strict TypeScript, React Hooks, and Tailwind CSS. Features 4 distinct autonomous ghost AI behaviors, tile collision grid, wrap-around tunnels, and touch/keyboard controls.",
    problem:
      "Recreating responsive 60fps retro arcade mechanics, tile collision grids, direction buffering, and authentic multi-ghost behaviors in modern React without depending on heavyweight external canvas game engines.",
    approach:
      "Implemented a custom game loop state machine (`useGame`) using pure React hooks and requestAnimationFrame, coupled with deterministic tile coordinate mathematics, SVG scalable vector sprites, power pellet timers, and distinct ghost AI states.",
    architecture:
      "Next.js 14 App Router component tree (`Maze.tsx`, `PacMan.tsx`, `Ghost.tsx`, `ScoreBoard.tsx`) powered by custom state hooks (`useGame.ts`), TypeScript models (`types/`), collision utilities (`utils/`), and CSS keyframe glowing effects.",
    outcome:
      "A fast, responsive, zero-dependency arcade game deployed live on GitHub Pages with authentic ghost pathfinding, mobile touch support, score tracking, lives management, and pause capabilities.",
    metrics: [
      { label: "Ghost AI Engines", value: "4 Behaviors" },
      { label: "Frame Latency", value: "<16ms" },
      { label: "Game Engines", value: "0 External" },
    ],
    tags: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "SVG", "Game Development"],
    role: "Frontend Engineer",
    year: "2026",
    href: "https://mtlab1122.github.io/Pac_Man/",
    repo: "https://github.com/MTLab1122/Pac_Man",
    featured: true,
    score: 4.43,
    keyFeatures: [
      "Four autonomous ghost AI behavior patterns: Blinky (chaser), Pinky (ambusher), Inky (random), Clyde (defender)",
      "Pixel-perfect grid collision detection and tunnel wrap-around mechanics",
      "Power pellet mode triggering 6-second ghost vulnerability states and scoring multipliers",
      "Direction input buffering ensuring fluid turn executions at intersections",
      "Fully responsive layout with desktop keyboard controls (WASD / Arrows) and mobile touch interaction",
      "SVG vector graphics ensuring razor-sharp rendering on high-DPI displays without raster pixelation",
    ],
    testNotes: "Validated across desktop browsers and mobile touchscreens with responsive viewport testing.",
  },
  {
    slug: "portfolio-architecture",
    title: "Editorial Developer Portfolio Architecture",
    category: "Frontend",
    tagline: "High-speed static portfolio architecture built with Astro, Tailwind CSS v4, and strict TypeScript.",
    description:
      "The production developer portfolio you are viewing, engineered with Astro, Tailwind CSS v4, self-hosted typography, GSAP timeline micro-interactions, WCAG 2.2 AA accessibility, and structured JSON-LD schema markup.",
    problem:
      "Traditional developer portfolios often rely on heavy client-side JavaScript frameworks, resulting in poor Core Web Vitals, slow mobile rendering, and lack of technical SEO.",
    approach:
      "Leveraged Astro's zero-JS-by-default static site generation, Tailwind v4 CSS design tokens, server-side route generation, dynamic XML sitemaps, and strict TypeScript data contracts.",
    architecture:
      "Astro component pipeline with modular layout shells (`Layout.astro`), central typed data layer (`profile.ts`), responsive SVG icon integration via `astro-icon`, and GSAP scroll/pointer interactions.",
    outcome:
      "Near-instantaneous first contentful paint, zero layout shift (CLS 0.0), full search engine crawlability, and responsive elegance across viewports from 360px to 1440px+.",
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Layout Shift", value: "0.0 CLS" },
      { label: "Client Runtime JS", value: "0 kB Base" },
    ],
    tags: ["Astro", "TypeScript", "Tailwind CSS v4", "GSAP", "Technical SEO"],
    role: "Lead Architect & Designer",
    year: "2026",
    href: "https://talha-portfolio-gules.vercel.app/",
    repo: "https://github.com/MTLab1122/portfolio",
    featured: false,
    score: 4.49,
    keyFeatures: [
      "Zero client-side JavaScript overhead for core content and markup",
      "Tailwind CSS v4 modern design tokens with editorial typography and high contrast",
      "Comprehensive JSON-LD Schema.org structured data (Person, WebSite, ProfilePage, CreativeWork)",
      "Automated dynamic XML sitemap and crawler-friendly robots.txt generation",
      "Strict WCAG 2.2 AA accessibility compliance with visible focus states and aria attributes",
    ],
  },
  {
    slug: "university-lms-sre",
    title: "University Learning Management System (LMS)",
    category: "Full Stack",
    tagline: "Full-stack university LMS with course registration, timetable conflict detection, and complete SRS documentation.",
    description:
      "Comprehensive educational platform built with Node.js and Express, supporting student course registration, prerequisite validation, schedule collision algorithms, online quizzes, assignments, fee breakdowns, and formal Software Requirements Specification (SRS).",
    problem:
      "Academic institutions require deterministic verification of course prerequisites, room/time scheduling conflicts, and integrated fee structures across departments.",
    approach:
      "Developed modular Express REST endpoints with student and administrator workflows, timetable grid layouts, quiz attempt tracking, and complete IEEE-style Software Requirements Engineering documentation.",
    architecture:
      "Node.js/Express server with structured routes for courses, assignments, quizzes, timetables, fees, and complaints, paired with a responsive client frontend and automated startup scripts (`start-all.ps1`).",
    outcome:
      "A complete, end-to-end academic management system with comprehensive SRS documentation, pre-loaded university courses, and conflict-free schedule calculation.",
    metrics: [
      { label: "Core Modules", value: "8 Subsystems" },
      { label: "Pre-loaded Courses", value: "5 Courses" },
      { label: "Specification", value: "IEEE SRS" },
    ],
    tags: ["Node.js", "Express", "JavaScript", "Software Engineering", "SRS", "REST API"],
    role: "Full-Stack Engineer",
    year: "2026",
    repo: "https://github.com/MTLab1122/Software_Requirement_Engineering_Project",
    featured: false,
    score: 4.16,
    keyFeatures: [
      "Course management with prerequisite checks, capacity limits, and drop validation",
      "Deterministic timetable conflict detection engine preventing scheduling overlaps",
      "Interactive online quizzes with timers, scoring, and attempt tracking",
      "Modular fee structure computation based on enrolled credit hours",
      "Formal Software Requirements Specification (SRS) document meeting IEEE standards",
    ],
  },
  {
    slug: "autoreport-tech-agent",
    title: "Autonomous Tech Intelligence Briefing Agent",
    category: "AI & Systems",
    tagline: "Autonomous 24h global tech landscape sweep, Gemini LLM synthesis, and publication-ready PDF delivery.",
    description:
      "Automated Python agent that aggregates trending developments across Hacker News, Hugging Face, and GitHub, executes multi-tier Gemini AI synthesis in JSON mode, and compiles publication-quality PDF briefs dispatched at 07:00 AM PKT via Resend and Windows Task Scheduler.",
    problem:
      "Engineering teams and founders waste hours sifting through noisy social feeds and marketing releases to extract critical architectural shifts, model weights, and breakthrough developer tools.",
    approach:
      "Constructed an automated parallel crawler across technical APIs, filtering exclusively for high-signal updates across 5 intelligence pillars, formatted via ReportLab PDF with XML sanitization and delivered through Resend HTTP API.",
    architecture:
      "Python modular architecture (`sources.py`, `synthesizer.py`, `pdf_generator.py`, `emailer.py`, `main.py`) with dataclass configurations, CLI execution flags (`--dry-run`, `--verify`, `--run-now`), and automated task scheduling.",
    outcome:
      "A deterministic, zero-fluff daily intelligence brief delivered automatically to configured recipients with dual log generation and graceful offline fallbacks.",
    metrics: [
      { label: "Intelligence Pillars", value: "5 Domains" },
      { label: "Daily Dispatch", value: "07:00 PKT" },
      { label: "Format", value: "Vector PDF" },
    ],
    tags: ["Python", "Google Gemini API", "ReportLab", "Resend API", "Automation", "CLI"],
    role: "Systems & AI Developer",
    year: "2026",
    repo: "https://github.com/MTLab1122/autoreport_agent",
    featured: false,
    score: 4.25,
    keyFeatures: [
      "Five intelligence pillars: New Models, Developer Tools, Major Tech Moves, Practitioner Insights, Trending Repos",
      "Live parallel 24-hour aggregator across Hacker News, Hugging Face, and GitHub APIs",
      "Multi-tier Google Gemini synthesis with strict JSON mode and offline heuristic fallbacks",
      "Publication-grade vector PDF generation via ReportLab with dynamic layout formatting",
      "Command-line execution tooling supporting `--verify`, `--dry-run`, `--run-now`, and scheduler setup",
    ],
  },
  {
    slug: "auranav-accessible-navigation",
    title: "AuraNav — Accessible Navigation System",
    category: "Frontend",
    tagline: "Production-grade, fully accessible responsive navigation architecture built with Astro and Tailwind CSS v4.",
    description:
      "Responsive navigation system engineered with strict TypeScript and Tailwind CSS v4, featuring WCAG-compliant keyboard traversal, animated hamburger-to-X transitions via group-aria-expanded, and zero runtime overhead.",
    problem:
      "Many modern navigation components break screen reader semantics, trap keyboard focus, or introduce bloated client JavaScript frameworks for simple menu toggles.",
    approach:
      "Built mobile-first Astro markup with Tailwind v4 variant modifiers, strict TypeScript state handlers (`scripts/navbar.ts`), Escape key listeners, outside-click detection, and aria-expanded synchronization.",
    architecture:
      "Component-driven Astro architecture (`Navbar.astro`, `Layout.astro`, `navbar.ts`) with typed navigation arrays (`NavLink[]`), producing 100% static HTML/CSS/JS without framework bloat.",
    outcome:
      "Lightweight, zero-runtime-overhead navigation system passing strict accessibility audits with seamless keyboard navigation.",
    metrics: [
      { label: "Accessibility Target", value: "WCAG 2.2 AA" },
      { label: "TypeScript Mode", value: "Strict" },
      { label: "Runtime Overhead", value: "0 kB Framework" },
    ],
    tags: ["Astro", "Tailwind CSS v4", "TypeScript", "Accessibility", "A11y"],
    role: "Frontend Developer",
    year: "2026",
    repo: "https://github.com/MTLab1122/aptura_week1_task1",
    featured: false,
    score: 3.96,
    keyFeatures: [
      "Mobile-first responsive layout collapsing below 768px (md breakpoint)",
      "Zero-class-juggling hamburger-to-X animation driven by Tailwind group-aria-expanded",
      "Full keyboard accessibility: Escape key menu dismissal, focus return, and visible focus rings",
      "Strict mode TypeScript controller handling outside-click, resize, and link selection",
    ],
  },
  {
    slug: "typescript-challenges-lab",
    title: "TypeScript Algorithmic Mastery Lab",
    category: "Frontend",
    tagline: "Comprehensive 45-exercise challenge repository mastering foundational type mechanics and algorithms.",
    description:
      "Structured repository of 45 progressive TypeScript challenges tackling type narrowing, generics, union types, array manipulation, data structure algorithms, and clean functional programming patterns.",
    problem:
      "Developing deep familiarity with TypeScript's advanced type system and algorithmic thinking requires disciplined, testable code challenges.",
    approach:
      "Structured 45 isolated task modules with strict type definitions, reproducible test assertions, and progressive complexity from beginner to advanced paradigms.",
    architecture:
      "Modular task folders (`Task 1` through `Task 45`) each containing typed TypeScript source implementations and verification runners.",
    outcome:
      "A comprehensive reference repository demonstrating deep command of TypeScript syntax, type safety, and foundational algorithmic problem-solving.",
    metrics: [
      { label: "Completed Challenges", value: "45 Tasks" },
      { label: "Type Safety", value: "100% Strict" },
      { label: "Topics Covered", value: "Algorithms & Types" },
    ],
    tags: ["TypeScript", "Algorithms", "Data Structures", "Type Safety", "Problem Solving"],
    role: "Software Engineer",
    year: "2026",
    repo: "https://github.com/MTLab1122/Typescript-Exercises",
    featured: false,
    score: 3.47,
    keyFeatures: [
      "45 modular programming challenges solved with strict TypeScript compiler flags",
      "Comprehensive coverage of string manipulation, math routines, and conditional logic",
      "Object modeling and interface definitions for realistic business entities",
      "Zero any usage ensuring end-to-end type safety throughout every challenge",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "DIT Instructor",
    org: "Govt. Technical & Vocational Center, Umarzai",
    period: "Ongoing",
    type: "On-site · Part-time",
    bullets: [
      "Teaches the Diploma in Information Technology track, covering computing fundamentals, software concepts, and office/design tooling.",
      "Mentors vocational students in programming fundamentals, problem-solving, and practical technical assignments.",
    ],
  },
  {
    role: "Computer Operator / Designer",
    org: "Mukhtar Printing Press",
    period: "3 years",
    type: "On-site · Part-time",
    bullets: [
      "Handled day-to-day graphic design, layout typesetting, and digital print production workflows with high attention to visual detail.",
      "Engineered clean print-ready vector designs in Corel Draw, Photoshop, and InPage.",
    ],
  },
  {
    role: "Social Media Manager",
    org: "MPA Arshad Khan — Umarzai, PK-63",
    period: "3 months",
    type: "On-site · Part-time",
    bullets: [
      "Managed content strategy, public releases, and community engagement for a constituency-level public office account.",
    ],
  },
  {
    role: "Data Entry & Computer Operator",
    org: "Taims Soft",
    period: "5 months",
    type: "Remote",
    bullets: [
      "Executed remote computer operations, data normalization, and digital records administration with high accuracy.",
    ],
  },
  {
    role: "Computer Operator",
    org: "Muhammad Zai Floor Mill",
    period: "1 month",
    type: "On-site",
    bullets: [
      "Operated inventory logging, billing spreadsheets, and administrative data processing.",
    ],
  },
];

export const internships = [
  { title: "Android Development Internship", org: "Abasyn Internship Program", period: "3 months" },
  { title: "Summer Internship Program", org: "ISPR | Pak Army", period: "1 month" },
  { title: "EOTO Internship", org: "NCHD, via Abasyn Internship Program", period: "3 months" },
  { title: "ORIC Internship", org: "Abasyn University Peshawar", period: "3 months" },
  { title: "On-Job Training", org: "Computer Technology, KP-TEVTA", period: "3 months" },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Abasyn University, Peshawar",
    period: "02/2023 — In progress (Graduation 2027)",
    detail: "CGPA 3.87 / 4.0",
  },
  {
    degree: "FSc Computer Science",
    school: "Springfield College, Umarzai",
    period: "2021 — 2023",
    detail: "80% (Grade A)",
  },
  {
    degree: "Diploma in Information Technology",
    school: "Govt. Technical & Vocational Center, Umarzai",
    period: "2022 — 2023",
    detail: "80% (KP-BTE)",
  },
  {
    degree: "Matriculation (Science)",
    school: "Usmania Public High School, Umarzai",
    period: "2019 — 2021",
    detail: "91% (Grade A1)",
  },
];

export const courses = [
  { title: "PIAIC — AI, Next.js, TypeScript, Tailwind CSS", org: "CECOS University, Peshawar" },
  { title: "IT Essentials", org: "CISCO Networking Academy" },
  { title: "Computer Course — Office Automation & Graphic Design", org: "Vocational Center Umarzai" },
  { title: "Digital Marketing Certification", org: "DigiSkills Pakistan" },
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Urdu", level: "Native / Bilingual" },
  { name: "Pashto", level: "Native / Mother Tongue" },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "What is Muhammad Talha's core engineering focus?",
    answer:
      "Muhammad Talha specializes in modern frontend architecture (Astro, Next.js, TypeScript, Tailwind CSS), full-stack web applications, and autonomous Python AI agent systems with Google Gemini GenAI SDK and GitHub Actions automation.",
  },
  {
    question: "Where is Muhammad Talha located and what is his work availability?",
    answer:
      "Muhammad Talha is based in Charsadda, Khyber Pakhtunkhwa, Pakistan (PKT, UTC+5). He is available for remote full-time software engineering roles, contract frontend development, and selective high-performance web development projects worldwide.",
  },
  {
    question: "What are Muhammad Talha's top verified GitHub projects?",
    answer:
      "His top public repositories on GitHub (MTLab1122) include: (1) scholorships_agent — an autonomous daily scholarship intelligence agent crawling and verifying regional aid opportunities with multi-format PDF/Excel reports; (2) Campus_Environment_DataVisualization_System — a full-stack Python telemetry and Plotly Dash analytical platform with 27 pytest tests; and (3) Pac_Man — a Next.js 14 arcade recreation featuring 4 autonomous ghost AI behavior patterns.",
  },
  {
    question: "What is Muhammad Talha's educational background?",
    answer:
      "He is pursuing a Bachelor of Software Engineering at Abasyn University Peshawar with a 3.87/4.0 CGPA, holds a Diploma in Information Technology (80%) from Govt. Technical & Vocational Center Umarzai, and completed the Presidential Initiative for AI and Computing (PIAIC) focusing on Next.js, TypeScript, and AI systems.",
  },
  {
    question: "How does Muhammad Talha approach web performance and accessibility?",
    answer:
      "He builds websites targeting perfect Core Web Vitals (LCP < 1.0s, CLS 0.0, INP < 50ms) using Astro's zero-JS-by-default architecture, self-hosted typography via Fontsource, accessible WCAG 2.2 AA compliant semantic HTML, visible keyboard focus indicators, and reduced-motion preferences.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  keywords: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "astro-vs-nextjs-for-small-business-websites",
    title: "Astro vs. Next.js for small business websites",
    excerpt:
      "A practical comparison for founders deciding which modern stack gives the best balance of speed, SEO, and long-term maintainability.",
    description:
      "Learn when Astro is the better choice for content-first marketing sites, and when Next.js may still win for complex apps.",
    category: "Development",
    tags: ["Astro", "Next.js", "SEO"],
    author: person.name,
    date: "2026-08-08",
    readTime: "5 min read",
    image: "/og-image.svg",
    featured: true,
    keywords: ["Astro", "Next.js", "small business website", "SEO"],
  },
  {
    slug: "building-trust-through-premium-web-design",
    title: "Building trust through premium web design",
    excerpt:
      "A clean, credible digital presence can do as much work as a sales pitch — if the user experience feels intentional and premium.",
    description:
      "Explore how typography, spacing, motion, and conversion-focused structure create trust for service businesses and personal brands.",
    category: "Design",
    tags: ["UX", "Branding", "Conversion"],
    author: person.name,
    date: "2026-07-22",
    readTime: "4 min read",
    image: "/og-image.svg",
    keywords: ["web design trust", "premium UX", "conversion-focused design"],
  },
  {
    slug: "seo-checklist-for-developers-and-founders",
    title: "SEO checklist for developers and founders",
    excerpt:
      "A compact workflow for improving technical SEO, content structure, and search performance without making the site heavier.",
    description:
      "From schema markup and page speed to metadata and internal linking, here is the checklist that matters most for modern websites.",
    category: "SEO",
    tags: ["SEO", "Core Web Vitals", "Schema"],
    author: person.name,
    date: "2026-06-14",
    readTime: "6 min read",
    image: "/og-image.svg",
    keywords: ["SEO checklist", "technical SEO", "schema markup", "Core Web Vitals"],
  },
  {
    slug: "how-to-turn-a-portfolio-into-client-leads",
    title: "How to turn a portfolio into client leads",
    excerpt:
      "Your portfolio should do more than showcase work. It should guide browsers toward trust, clarity, and action.",
    description:
      "Learn how to structure a portfolio for conversion, from proof points and case studies to a simple contact journey.",
    category: "Marketing",
    tags: ["Portfolio", "Lead generation", "Freelancing"],
    author: person.name,
    date: "2026-05-18",
    readTime: "5 min read",
    image: "/og-image.svg",
    keywords: ["portfolio leads", "freelance portfolio", "client conversion"],
  },
];

export const blogCategories = [
  "All",
  ...new Set(blogPosts.map((post) => post.category)),
];
