export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  technologies: string[];
  githubUrl?: string;
  description: string;
  features: string[];
  contribution: string;
  architectureNodes: {
    id: string;
    label: string;
    description: string;
    sublabel?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  partnership?: string;
  period: string;
  type: string;
  location: string;
  description: string;
  workflowSteps: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  period: string;
  score: string;
  scoreLabel: string;
  mode: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  dateOrPeriod: string;
  credentialDetails: string;
  image: string;
  badgeType?: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "MD ASAD ANWER",
    role: "Backend Engineer / Software Developer",
    location: "Kolkata, West Bengal, India",
    email: "mdasadanwer2005@gmail.com",
    phone: "+918797661145",
    phoneFormatted: "+91 8797661145",
    summary:
      "Computer Science undergraduate with hands-on experience in software development, backend technologies, databases, and web technologies. Proficient in Java, Spring Boot, REST APIs, SQL, and modern web technologies, with experience in building backend services and full-stack applications. Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, and Database Management, complemented by experience in AI model training and collaborative software projects.",
    tagline: "Java • Spring Boot • REST APIs • SQL • Salesforce • Full-Stack Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/md-asad-anwer-19a703318/",
      github: "https://github.com/Asad9206",
      leetcode: "https://leetcode.com/u/mdasadanwer/",
      salesforce: "https://salesforce.com/trailblazer/mnrf94aufyws59yqjq",
      projectGithub: "https://github.com/Asad9206/Multi-Tenant-Task-Management-System"
    }
  },
  stats: [
    { label: "B.Tech CSE", value: "2023–2027", subtext: "GNIT, MAKAUT" },
    { label: "CGPA", value: "8.45", subtext: "Consistent academic standing" },
    { label: "DSA Problems", value: "450+", subtext: "Solved on LeetCode" },
    { label: "LeetCode Streak", value: "300+", subtext: "Active daily streak" },
    { label: "Salesforce Badges", value: "69", subtext: "Trailhead Expeditioner" },
    { label: "Superbadge", value: "1", subtext: "Apex & Admin verified" },
  ],
  skills: {
    programmingLanguages: [
      { name: "Java", level: "Primary", highlight: "Core & Advanced Java, Multi-threading, OOP" },
      { name: "Python", level: "Basics", highlight: "Scripting, Automation basics" }
    ],
    frameworksAndTech: [
      { name: "Spring Boot", highlight: "REST APIs, Service Architecture, Dependency Injection" },
      { name: "REST APIs", highlight: "Contract design, Endpoints, JSON, Auth handling" },
      { name: "React", highlight: "Component design, Hooks, State management" },
      { name: "Node.js", highlight: "Backend runtimes, NPM ecosystem" },
      { name: "HTML", highlight: "Semantic layout, accessibility standards" },
      { name: "CSS", highlight: "Responsive design, Flexbox, Grid, Glassmorphism" }
    ],
    databases: [
      { name: "PostgreSQL", highlight: "Schema design, relational integrity, foreign keys" },
      { name: "MySQL", highlight: "Relational queries, indexes, normalization" }
    ],
    tools: [
      { name: "IntelliJ IDEA", highlight: "Java & Spring enterprise development" },
      { name: "Git", highlight: "Version control, branching, PR collaboration" },
      { name: "Visual Studio Code", highlight: "Web & full-stack development" },
      { name: "Power BI", highlight: "Data modeling, KPI dashboards, reporting" },
      { name: "Google Antigravity", highlight: "Advanced AI-augmented engineering workflows" }
    ],
    salesforce: [
      { name: "Salesforce Administration", highlight: "Org setup, Security, User & Permission sets" },
      { name: "Salesforce Development", highlight: "Custom enterprise backend solutions" },
      { name: "Salesforce Flow", highlight: "Record-triggered & Screen flows automation" },
      { name: "Apex", highlight: "Server-side OOP logic, triggers, controllers" },
      { name: "SOQL", highlight: "Salesforce Object Query Language optimization" },
      { name: "Lightning Web Components (LWC)", highlight: "Modern reactive UI framework" }
    ],
    coreSubjects: [
      { name: "Data Structures and Algorithms", highlight: "Arrays, Trees, Graphs, DP, 450+ solved" },
      { name: "Object-Oriented Programming", highlight: "Encapsulation, Polymorphism, Inheritance, Abstraction" },
      { name: "Database Management", highlight: "Relational modeling, Normalization, ACID properties" },
      { name: "Operating Systems", highlight: "Processes, Threads, Concurrency, Memory management" }
    ],
    softSkills: [
      "Client Communication",
      "Interpersonal Skills",
      "Teamwork",
      "Leadership",
      "Problem Solving",
      "Adaptability to New Technologies and Work Environments"
    ]
  },
  experiences: [
    {
      id: "exp-1",
      role: "AI Model Annotator",
      company: "iMerit Technology",
      partnership: "via RT Network Solutions Pvt. Ltd.",
      period: "January 2026 – April 2026",
      type: "Paid Internship",
      location: "Remote",
      description: "Evaluated AI generated images for accuracy, quality and prompt alignment.",
      workflowSteps: ["AI Generated Image", "Evaluation", "Accuracy", "Quality", "Prompt Alignment"]
    },
    {
      id: "exp-2",
      role: "AI Model Training",
      company: "RWS Group",
      partnership: "Freelance",
      period: "June 2026 – Present",
      type: "Freelance — AI Model Training",
      location: "Remote",
      description: "Annotate and evaluate data to support AI model training and improvement.",
      workflowSteps: ["DATA", "ANNOTATION", "EVALUATION", "AI MODEL TRAINING"]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: "multi-tenant-task-management",
      title: "MULTI-TENANT TASK MANAGEMENT SYSTEM",
      subtitle: "Enterprise Backend Architecture with Strict Tenant Isolation",
      type: "Team Project",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      githubUrl: "https://github.com/Asad9206/Multi-Tenant-Task-Management-System",
      description: "Built a backend system supporting multiple organizations with strict tenant-level data isolation.",
      contribution: "Collaboratively implemented backend services, contributed to database design, handled validation logic, and supported API development and debugging.",
      features: [
        "Tenant-level data isolation",
        "Tenant-aware request handling",
        "Custom headers & validation mechanisms",
        "REST APIs supporting task lifecycle operations",
        "Task lifecycle management (creation, assignment, updates)",
        "Database schema design & entity relationships",
        "Data consistency & transactional integrity"
      ],
      architectureNodes: [
        { id: "org", label: "ORGANIZATION", description: "Multi-tenant tenant entity identifying the requesting organization." },
        { id: "req", label: "REQUEST", description: "Incoming client payload with tenant-specific routing requirements." },
        { id: "header", label: "CUSTOM HEADER", description: "Tenant-aware request handling using custom headers and validation mechanisms." },
        { id: "validation", label: "TENANT VALIDATION", description: "Filters request to ensure non-cross-tenant data leakage." },
        { id: "api", label: "SPRING BOOT API", description: "REST APIs supporting task lifecycle operations (creation, assignment, updates)." },
        { id: "service", label: "SERVICE LAYER", description: "Business logic applying validation and transaction coordination." },
        { id: "postgres", label: "POSTGRESQL", description: "Database schema and entity relationships supporting consistency and data integrity." },
        { id: "task", label: "TASK", description: "Isolated tenant task object lifecycle maintained with consistency." }
      ]
    },
    {
      id: "it-genie-pro",
      title: "IT GENIE PRO",
      subtitle: "IT Service Request & Asset Management System",
      type: "Salesforce Architecture",
      technologies: [
        "Salesforce Administration",
        "Custom Objects",
        "Custom Fields",
        "Picklists",
        "Lookup Relationships",
        "Validation Rules",
        "Salesforce Flow",
        "Reports",
        "Dashboards"
      ],
      description: "Built an IT service system using custom objects, fields, picklists, and lookup relationships.",
      contribution: "Architected end-to-end IT service request lifecycle, automated routing with Salesforce Flow, and created live reporting dashboards.",
      features: [
        "Custom objects & fields with structured picklists",
        "Lookup relationships linking IT assets to tickets",
        "Automated request prioritization",
        "Resolution tracking with SLA indicators",
        "Salesforce Flow automation pipelines",
        "Validation rules preventing incomplete submissions",
        "Reports & Dashboards tracking status, priority, and activity"
      ],
      architectureNodes: [
        { id: "req", label: "SERVICE REQUEST", description: "User or internal IT ticket intake." },
        { id: "obj", label: "CUSTOM OBJECT", description: "Structured Salesforce data model holding IT ticket information." },
        { id: "fields", label: "FIELDS / PICKLISTS", description: "Standardized taxonomies for hardware, software, and issue types." },
        { id: "lookup", label: "LOOKUP RELATIONSHIP", description: "Relational links connecting ticket records to asset inventories." },
        { id: "validation", label: "VALIDATION RULE", description: "Enforces required context before status transition." },
        { id: "flow", label: "SALESFORCE FLOW", description: "Automated trigger logic dynamically assigning priority and notifications." },
        { id: "resolution", label: "RESOLUTION TRACKING", description: "Tracks ticket lifecycle from open to solved." },
        { id: "reports", label: "REPORTS", description: "Aggregates support metrics by agent, asset, and priority." },
        { id: "dashboard", label: "DASHBOARD", description: "Interactive executive visibility across IT support activity." }
      ]
    }
  ] as Project[],
  achievements: {
    leetcode: {
      problemsSolved: "450+",
      currentStreak: "300+",
      submissionsYear: "645",
      activeDays: "337",
      badgesCount: "14",
      profileUrl: "https://leetcode.com/u/mdasadanwer/",
      screenshots: [
        { path: "/assets/pictures/LEETCODE%20STREAKS.png", title: "LeetCode Submissions & Problem Solving Streak" },
        { path: "/assets/pictures/LEETCODE%20BADGES.png", title: "LeetCode Badges (200 Days, 100 Days, 50 Days & Monthly Medals)" }
      ],
      flow: ["PROBLEM", "CODE", "SUBMIT", "ACCEPTED", "NEXT PROBLEM"]
    },
    salesforce: {
      rank: "Expeditioner",
      badges: "69 Badges",
      superbadges: "1 Superbadge",
      points: "56,575 Points",
      trails: "3 Trails",
      profileUrl: "https://salesforce.com/trailblazer/mnrf94aufyws59yqjq",
      screenshot: "/assets/pictures/SALESFORCE%20BADGES%20AND%20POINTS.png",
      description: "Earned through completion of Trailhead learning modules and hands-on challenges."
    },
    gfg: {
      title: "GFG TECHNICAL SCRIPTER 2026",
      award: "Winner",
      recognition: "Received Cash Prize and GFG Swags",
      description: "Recognized for technical excellence and authoring comprehensive computer science content for the GeeksforGeeks developer community."
    },
    mentorship: [
      {
        title: "National Science Day 2026 — Mentor Award",
        institution: "Nehalia Day Jr. High School",
        date: "28 February, 2026",
        citation: "In recognition of his outstanding contribution as a Mentor during National Science Day 2026. His valuable guidance and expertise in developing innovative science models greatly inspired our students.",
        images: [
          { path: "/assets/pictures/teaching%20award%20and%20certificate.jpeg", title: "Certificate of Appreciation & Memento" },
          { path: "/assets/pictures/teaching%20award.jpeg", title: "Award Presentation Ceremony" }
        ]
      },
      {
        title: "YUVA Mentorship Program 2024",
        institution: "Yi (Young Indians) / CII (Confederation of Indian Industry)",
        date: "31/08/2024",
        citation: "Successfully completed the YUVA Mentorship Program 2024 by Young Indians (Yi) Kolkata Chapter in association with CII.",
        images: [
          { path: "/assets/pictures/yuva%20mentorship%20award.jpeg", title: "YUVA Mentorship Certificate of Completion" }
        ]
      }
    ]
  },
  research: {
    title: "Hallucination-Free AI Strategies for Enhancing Accuracy in Large Language Models",
    event: "RAICCIT 2025: Research Advancements and Innovations in Computing, Communications, and Information Technologies",
    date: "11th & 12th April 2025",
    isbn: "978-81-973699-3-3",
    role: "Co-Author",
    authors: ["Moumita Samanta", "Md Asad Anwer", "Ritika Srivastava", "Ananjan Maiti"],
    institution: "Guru Nanak Institute of Technology, Kolkata, India",
    description: "Proposed techniques to improve LLM reliability and reduce hallucinations.",
    abstractSummary: "This paper examines various methods to reduce LLM hallucinations, exploring retrieval-augmented prompts, error highlighting prompts, query transformation modules, chain-of-thought prompting, self-consistency voting, context-constraining prompts, structured validation prompts, and guided iterative refinement.",
    flow: ["LLM", "GENERATED OUTPUT", "EVALUATION", "RELIABILITY", "IMPROVED OUTPUT"],
    images: [
      { path: "/assets/pictures/RAICCIT%20RESEARCH%20PAPER%20FRONT%20PAGE.png", title: "Proceedings of RAICCIT 2025 Front Page (ISBN: 978-81-973699-3-3)" },
      { path: "/assets/pictures/RAICCIT%20AWARD.png", title: "RAICCIT 2025 Conference Certificate Presentation" },
      { path: "/assets/pictures/PRESENTATION%20SKILLS.png", title: "Delivering Technical Paper Presentation at Conference Hall" }
    ]
  },
  certifications: [
    {
      id: "cert-nptel-java",
      title: "Programming in Java",
      issuer: "NPTEL / IIT Kharagpur (Funded by MoE, Govt. of India)",
      dateOrPeriod: "Jul-Oct 2025 (12 week course)",
      credentialDetails: "Consolidated Score: 91% • Elite + Gold Certified • Roll: NPTEL25CS110S360801795",
      image: "/assets/pictures/JAVA%20PROGRAMMING.png",
      badgeType: "Elite + Gold",
      highlights: [
        "Score: 91% (Assignments: 24.94/25, Proctored Exam: 66/75)",
        "Elite + Gold Medal credential",
        "Top tier among 26,183 certified candidates nationwide"
      ]
    },
    {
      id: "cert-oci-devops",
      title: "Oracle Cloud Infrastructure DevOps Professional",
      issuer: "Oracle Certified Professional",
      dateOrPeriod: "28 October 2025",
      credentialDetails: "Score: 92% • OCI DevOps Certified",
      image: "/assets/pictures/DEVOPS%20OCI%20BADGE.png",
      badgeType: "Oracle Certified",
      highlights: [
        "Official Oracle Certified Professional Badge",
        "Continuous integration, automated deployments, cloud infrastructure practices"
      ]
    },
    {
      id: "cert-salesforce-expeditioner",
      title: "Salesforce Trailhead Expeditioner",
      issuer: "Salesforce Trailhead",
      dateOrPeriod: "Active",
      credentialDetails: "69 Badges • 1 Superbadge • 56,575 Points",
      image: "/assets/pictures/SALESFORCE%20BADGES%20AND%20POINTS.png",
      badgeType: "Trailhead Expeditioner",
      highlights: [
        "69 Trailhead badges & hands-on superbadge completion",
        "Deep mastery of Salesforce Admin, Flows, Apex & SOQL"
      ]
    },
    {
      id: "cert-eduskills",
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "Eduskills Foundation",
      dateOrPeriod: "October–December 2025",
      credentialDetails: "Grade O • Full Stack Java & Web Technologies",
      image: "/assets/pictures/JAVA%20PROGRAMMING.png",
      badgeType: "Grade O",
      highlights: [
        "Grade O performance recognition",
        "Hands-on full-stack development and backend architecture"
      ]
    }
  ] as CertificateItem[],
  education: [
    {
      degree: "B.Tech — Computer Science and Engineering",
      institution: "Guru Nanak Institute of Technology",
      boardOrUniversity: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
      period: "2023–2027",
      score: "8.45",
      scoreLabel: "CGPA",
      mode: "Full-time"
    },
    {
      degree: "Class 12 — ISC",
      institution: "St. Thomas Boys School, Khidderpore",
      boardOrUniversity: "Council for the Indian School Certificate Examinations (CISCE)",
      period: "2022–2023",
      score: "79.17%",
      scoreLabel: "Aggregate",
      mode: "Full-time"
    },
    {
      degree: "Class 10 — ICSE",
      institution: "St. Thomas Boys School, Khidderpore",
      boardOrUniversity: "Council for the Indian School Certificate Examinations (CISCE)",
      period: "2020–2021",
      score: "86%",
      scoreLabel: "Aggregate",
      mode: "Full-time"
    }
  ] as EducationItem[]
};
