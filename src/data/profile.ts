// Central content file — edit this to update the whole site.
// Everything the components render lives here, typed, so changing
// text never means touching markup.

export const person = {
  name: "Muhammad Talha",
  role: "Software Engineer & Web Developer",
  location: "Charsadda, Khyber Pakhtunkhwa, Pakistan",
  email: "muhammadtalhapro1@gmail.com",
  phone: "+92 347 2937773",
  github: "https://github.com/MTLabs1122",
  linkedin: "https://www.linkedin.com/in/mtlabs1122/",
  resumeUrl: "/Muhammad-Talha-Resume.pdf",
  photo: "/images/profile-photo.png",
  photoAlt: "Muhammad Talha portrait",
  siteName: "Muhammad Talha",
  seoTitle: "Muhammad Talha — Software Engineer & Web Developer",
  seoDescription:
    "Muhammad Talha is a software engineer and web developer building premium, conversion-focused websites and web apps with Astro, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Muhammad Talha",
    "software engineer Pakistan",
    "web developer Pakistan",
    "Astro developer",
    "Next.js developer",
    "portfolio website",
    "freelance web developer",
  ],
  // Kept honest and specific rather than the generic "7 years / Java / React /
  // healthcare" line from the source resume, which didn't match the rest of
  // the CV (still-in-progress degree, part-time/internship roles, no Java or
  // React in the skills list). Swap this out any time — it's just a string.
  summary:
    "Software Engineering student and self-taught web developer building with Astro, Next.js, TypeScript and Node.js. Comfortable across the stack, from clean UI in Tailwind to data in MongoDB, with a design background that keeps interfaces sharp. Currently sharpening AI-assisted development skills through PIAIC, and open to remote and freelance work with clients anywhere.",
};

export const stats = [
  { value: "3.87", label: "CGPA, Software Engineering", suffix: "/4.0" },
  { value: "5+", label: "Internships & training programs" },
  { value: "3", label: "Languages spoken", suffix: " " },
  { value: "10+", label: "Tools across dev & design" },
];

export const skills = {
  "Languages & Frameworks": [
    "TypeScript",
    "JavaScript",
    "Astro",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "MongoDB",
  ],
  "Design & Productivity": [
    "Figma-style UI design",
    "Corel Draw",
    "Photoshop",
    "Canva",
    "InPage",
    "MS Office",
  ],
  "Currently learning": ["AI-assisted development", "Advanced Next.js", "Cloud deployment"],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

// TODO(Talha): swap these for your real projects — title, a 1-2 line result-
// focused description, tags, and a live/repo link. Keep 3-6 for a tight page.
export const projects: Project[] = [
  {
    title: "Portfolio system redesign",
    description: "Fast, premium portfolio experience built to communicate skill, credibility, and clear CTAs without clutter.",
    tags: ["Astro", "TypeScript", "Tailwind"],
    href: "#",
    repo: "https://github.com/MTLabs1122",
    featured: true,
  },
  {
    title: "Frontend product landing page",
    description: "High-conversion marketing page focused on positioning, visual clarity, and mobile-first responsiveness.",
    tags: ["Next.js", "MongoDB"],
    href: "#",
    repo: "https://github.com/MTLabs1122",
  },
  {
    title: "Workflow automation tool",
    description: "A lightweight internal tool for organizing repetitive tasks, data handling, and faster daily operations.",
    tags: ["Node.js", "Python"],
    href: "#",
    repo: "https://github.com/MTLabs1122",
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
    bullets: ["Teaches the Diploma in Information Technology track, covering computing fundamentals and office/design tooling."],
  },
  {
    role: "Computer Operator / Designer",
    org: "Mukhtar Printing Press",
    period: "3 years",
    type: "On-site · Part-time",
    bullets: ["Handled day-to-day design and print production work, from layout to final output."],
  },
  {
    role: "Social Media Manager",
    org: "MPA Arshad Khan — Umarzai, PK-63",
    period: "3 months",
    type: "On-site · Part-time",
    bullets: ["Managed content and posting for a constituency-level public office account."],
  },
  {
    role: "Data Entry & Computer Operator",
    org: "Taims Soft",
    period: "5 months",
    type: "Remote",
    bullets: ["Remote data entry and computer operations work."],
  },
  {
    role: "Computer Operator",
    org: "Muhammad Zai Floor Mill",
    period: "1 month",
    type: "On-site",
    bullets: ["Short-term computer operations role."],
  },
];

export const internships = [
  { title: "Android Development Internship", org: "Abasyn Internship Program", period: "3 months" },
  { title: "Summer Internship Program", org: "ISPR | Pak Army", period: "1 month" },
  { title: "EOTO Internship", org: "NCHD, via Abasyn Internship Program", period: "3 months" },
  { title: "ORIC Internship", org: "Abasyn University", period: "3 months" },
  { title: "On-Job Training", org: "Computer Technology, KP-TEVTA", period: "3 months" },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Abasyn University, Peshawar",
    period: "02/2023 — In progress",
    detail: "CGPA 3.87",
  },
  {
    degree: "FSc Computer Science",
    school: "Springfield College, Umarzai",
    period: "2021 — 2023",
    detail: "80%",
  },
  {
    degree: "Diploma in Information Technology",
    school: "Govt. Technical & Vocational Center, Umarzai",
    period: "2022 — 2023",
    detail: "80%",
  },
  {
    degree: "Matriculation",
    school: "Usmania Public High School, Umarzai",
    period: "2019 — 2021",
    detail: "91%",
  },
];

export const courses = [
  { title: "PIAIC — AI, Next.js, TypeScript, Tailwind CSS", org: "CECOS University, Peshawar" },
  { title: "IT Essentials", org: "CISCO Networking Academy" },
  { title: "Computer Course — Office Automation & Graphic Design", org: "3 months" },
  { title: "Digital Marketing", org: "DigiSkills" },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Pashto", level: "Native" },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
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
    image: "/images/og-image.svg",
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
    image: "/images/og-image.svg",
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
    image: "/images/og-image.svg",
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
    image: "/images/og-image.svg",
    keywords: ["portfolio leads", "freelance portfolio", "client conversion"],
  },
];

export const blogCategories = [
  "All",
  ...new Set(blogPosts.map((post) => post.category)),
];
