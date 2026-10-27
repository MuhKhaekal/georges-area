export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  screenshots?: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
  status: "draft" | "published";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Sistem Rekapitulasi Stimulus PVN BBPVP Makassar",
    category: "Web Application",
    description:
      "Developed a recapitulation system integrated with the center's database, including training and budget data, along with realization, through interactive dashboard visualization. Successfully integrated data, creating a single-stop shop for easy processing of National Vocational Training data.",
    role: "Full-stack Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "NeonDB", "Postman"],
    screenshots: ["/images/projects/pvn1.webp", "/images/projects/pvn2.webp", "/images/projects/pvn3.webp", "/images/projects/pvn4.webp"],
    demoUrl: "https://dashboard-pvn-2026.vercel.app",
    repositoryUrl: "https://github.com/pvnbbpvpmakassar/sim-pvn-bbpvp",
    featured: true,
    status: "draft",
  },
  {
    id: "project-2",
    title: "Sistem Penilaian Kinerja Non ASN BBPVP Makassar",
    category: "Web Application",
    description:
      "Establishing an assessment and attendance system that can only be conducted in the hall within a specified attendance radius, with verification output and electronic signature by the head of the general department. Successfully closing loopholes for attendance data manipulation.",
    role: "Full-stack Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "NeonDB", "Postman"],
    screenshots: ["/images/projects/nonasn1.webp", "/images/projects/nonasn2.webp", "/images/projects/nonasn3.webp", "/images/projects/nonasn4.webp"],
    demoUrl: "https://sim-penilaiankinerja-nonasn.vercel.app",
    repositoryUrl: "https://github.com/MuhKhaekal/sim-penilaian-kinerja-nonasn-bbpvp",
    featured: false,
    status: "draft",
  },
  {
    id: "project-3",
    title: "Sistem Informasi Manajemen Pegawai BBPVP Makassar",
    category: "Web Application",
    description: "Building a system for employee data and leave calculations stored in a single database. Successfully providing an effective solution to the initial problem of employee and leave data not being synchronized with each other.",
    role: "Full-stack Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "NeonDB", "Postman"],
    screenshots: ["/images/projects/peg1.webp", "/images/projects/peg2.webp", "/images/projects/peg3.webp", "/images/projects/peg4.webp"],
    demoUrl: "https://dashboard-pegawai-bbpvp.vercel.app",
    repositoryUrl: "https://github.com/MuhKhaekal/sim-pegawai-bbpvp",
    featured: false,
    status: "draft",
  },
  {
    id: "project-4",
    title: "e-Monev Kab. Bulukumba",
    category: "Web Application",
    description: "Responsible for debugging and resolving technical issues within the e-Monev application user interface. Successfully improved overall system stability to optimize monitoring and evaluation processes at the district level.",
    role: "Frontend Development",
    technologies: ["Laravel", "MYSQL", "Laragon", "JavaScript, Postman"],
    screenshots: ["/images/projects/monev1.webp", "/images/projects/monev2.webp"],
    demoUrl: "https://bulukumbakab.emonev.com/login",
    repositoryUrl: "",
    featured: false,
    status: "draft",
  },
  {
    id: "project-5",
    title: "Sistem Batangkaluku Cuti Online (SIBACO)",
    category: "Web Application",
    description: "Managed the full application development cycle (end-to-end), from planning and interface design to database implementation. Transformed the manual employee leave application process into a fully digital one, and ensured application stability through post-release system maintenance.",
    role: "Full-stack Development",
    technologies: ["Laravel", "MYSQL", "Laragon", "JavaScript, Postman"],
    screenshots: ["/images/projects/baco1.webp", "/images/projects/baco2.webp"],
    demoUrl: "",
    repositoryUrl: "https://github.com/MuhKhaekal/BBPP_APP_CUTI",
    featured: false,
    status: "draft",
  },
  {
    id: "project-6",
    title: "Learning Management System (LMS) Studi Al-Quran Intensif Universitas Hasanuddin",
    category: "Web Application",
    description: "Developed a relational database architecture and built a reliable RESTful API. This system was designed using Design Science Research (DSR) and Waterfall methods to centrally manage attendance, materials, assignments, and assessments on a large scale, accommodating the activities of thousands of students.",
    role: "Backend Development",
    technologies: ["Laravel", "MYSQL", "Laragon", "JavaScript, Postman"],
    screenshots: ["/images/projects/sains1.webp", "/images/projects/sains2.webp"],
    demoUrl: "",
    repositoryUrl: "https://github.com/MuhKhaekal/SAINS-LMS-PROJECT",
    featured: false,
    status: "draft",
  },
  {
    id: "project-7",
    title: "Website Pariwisata Bajo Bahari",
    category: "Web Application",
    description: "Develop an interactive digital platform to promote the marine tourism potential and unique local culture of the Bajo Tribe. Implement search engine optimization (SEO) practices on gallery pages and tour package information to increase search engine visibility and reach both domestic and international tourists.",
    role: "Full-stack Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "NeonDB", "Postman"],
    screenshots: ["/images/projects/bajo1.webp", "/images/projects/bajo2.webp"],
    demoUrl: "https://bajo-bahari.vercel.app/",
    repositoryUrl: "https://github.com/sulo-dev/bajo-bahari",
    featured: false,
    status: "draft",
  },
];
