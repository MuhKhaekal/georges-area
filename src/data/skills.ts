
export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    number: "1",
    title: "Frontend",
    description:
      "Membangun antarmuka web yang responsif, terstruktur, dan nyaman digunakan.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Dart",
      "Kotlin",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
  },
  {
    id: "backend",
    number: "2",
    title: "Backend",
    description:
      "Mengembangkan logika aplikasi, API, autentikasi, dan proses pengolahan data.",
    technologies: [
      "PHP",
      "Python",
      "Ruby on Rails",
      "Java",
      "Laravel",
      "Node.js",
      "REST API",
    ],
  },
  {
    id: "database",
    number: "3",
    title: "Database",
    description:
      "Merancang struktur data dan mengelola penyimpanan informasi aplikasi.",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "MongoDB",
      "Firebase",
      "SQLite",
    ],
  },
  {
    id: "tools",
    number: "4",
    title: "Tools & Workflow",
    description:
      "Menggunakan alat pengembangan untuk membantu proses implementasi dan pemeliharaan aplikasi.",
    technologies: [
      "Git",
      "GitHub",
      "Figma",
      "Docker",
      "VS Code",
      "HeidiSQL",
      "Android Studio",
      "NeonDB",
      "Supabase",
      "Postman"
    ],
  },
];
