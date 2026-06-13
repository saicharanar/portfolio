export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  highlighted?: boolean;
}

export interface ProofPoint {
  value: string;
  label: string;
}

export interface ExperienceItem {
  index: string;
  date: string;
  role: string;
  company: string;
  tags: string;
}

export interface ProjectDetail {
  label: string;
  lead: string;
  copy: string;
}

export interface Project {
  index: string;
  kicker?: string;
  meta: string;
  title: string;
  details: ProjectDetail[];
}

export interface SkillGroup {
  title: string;
  skills: string;
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  {
    label: 'Resume',
    href: 'assets/sai-charan-abbireddy-resume.pdf',
    external: true,
    highlighted: true,
  },
];

export const proofPoints: ProofPoint[] = [
  { value: '3+ years', label: 'Frontend' },
  { value: 'Health-tech', label: 'Enterprise systems' },
  { value: 'Angular · React', label: 'TypeScript' },
];

export const experiences: ExperienceItem[] = [
  {
    index: '01',
    date: 'Sep 2025 - Present',
    role: 'Software Engineer 2 - Frontend',
    company: 'ModMed',
    tags: 'Angular modernization · React check-in · Accessibility',
  },
  {
    index: '02',
    date: 'Jul 2023 - Sep 2025',
    role: 'Software Engineer - Frontend',
    company: 'ThoughtWorks',
    tags: 'SmartOffice Portal · Micro-frontends · Design systems',
  },
  {
    index: '03',
    date: 'Feb 2021 - Jul 2023',
    role: 'STEP Intern',
    company: 'ThoughtWorks',
    tags: 'TDD · Jest · Unity AR demos · AppCast',
  },
];

export const projects: Project[] = [
  {
    index: '01',
    kicker: 'Selected Work',
    meta: 'ThoughtWorks · Jul 2023 - Sep 2025',
    title: 'SmartOffice Device Management Portal',
    details: [
      {
        label: 'Product Context',
        lead: 'Enterprise Angular portal',
        copy: 'for centralized device management across organizations.',
      },
      {
        label: 'My Contribution',
        lead: 'Co-led the frontend migration',
        copy: 'across micro-frontends, Akita-to-Elf state work, and UI review standards.',
      },
      {
        label: 'Outcome',
        lead: 'Supported 3 releases per quarter',
        copy: 'and helped teams adopt shared design-system patterns.',
      },
    ],
  },
  {
    index: '02',
    meta: 'ModMed · Sep 2025 - Present',
    title: 'Digital Health Application',
    details: [
      {
        label: 'Product Context',
        lead: 'Health-tech workflows',
        copy: 'for patient and practice operations with secure clinical data handling.',
      },
      {
        label: 'My Contribution',
        lead: 'Modernized Angular flows',
        copy: 'and delivered React patient check-in issue selection in week one.',
      },
      {
        label: 'Quality Focus',
        lead: 'Audited accessibility gaps',
        copy: 'across priority screens while contributing to HIPAA-aware UI delivery.',
      },
    ],
  },
  {
    index: '03',
    meta: 'ThoughtWorks STEP Internship · Feb 2021 - Jul 2023',
    title: 'Lenovo AR Model Viewer and AppCast',
    details: [
      {
        label: 'Product Context',
        lead: 'Client-demo tooling',
        copy: 'for Lenovo AR Glass, 3D model interaction, and headset-view streaming.',
      },
      {
        label: 'My Contribution',
        lead: 'Built Unity model viewers',
        copy: 'and AppCast flows for remote demos and troubleshooting.',
      },
      {
        label: 'Engineering Practice',
        lead: 'Practiced test-first delivery',
        copy: 'with Jest coverage across multiple deployments.',
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Interface',
    skills: 'Angular · React · TypeScript · RxJS · HTML · CSS · SCSS',
  },
  {
    title: 'Architecture & State',
    skills:
      'Micro-frontends · Module Federation · Design systems · Component libraries · Elf · Akita · NgRx',
  },
  {
    title: 'Quality & Delivery',
    skills:
      'Accessibility · WCAG · ARIA · Jest · Cypress · Testing Library · TDD · Git · Jenkins · CI/CD',
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:saicharan.abbireddy@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/saicharanar', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saicharanabbireddy', external: true },
];
