export type JourneyItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  logo?: string;
  organizationUrl?: string;
  type: "education" | "experience" | "learning";
  status: "draft" | "published";
};

export const journeyItems: JourneyItem[] = [
  {
    id: "journey-06",
    period: "Agu 2026 - PRESENT",
    title: "Information System Administrator",
    organization: "Balai Besar Pelatihan dan Produktivitas (BBPVP) Makassar",
    description:
      "Designed and developed the Performance Evaluation, Employee Management, and National Vocational Training Information Systems for the agency as part of the implementation of the Electronic-Based Government System (SPBE) architecture, featuring a single-point-of-access that ensures the systems data is fully integrated.",
    logo: "/images/journey/bbpvp.webp",
    organizationUrl: "",
    type: "experience",
    status: "draft",
  },
  {
    id: "journey-05",
    period: "Agu 2025 - Jun 2026",
    title: "Junior Full Stack Developer",
    organization: "PT. Sulo Dev Teknologi",
    description: "Design, build, and implement end-to-end (full-stack) custom applications specifically tailored to the client’s needs and specifications.",
    logo: "/images/journey/sulo.webp",
    organizationUrl: "",
    type: "experience",
    status: "draft",
  },
  {
    id: "journey-04",
    period: "Agu 2022 — Mar 2026",
    title: "Bachelor of Information System",
    organization: "Hasanuddin University",
    description: "A graduate of the Hasanuddin University Information Systems program with a GPA of 3.86, chose the management information systems major which studies business and software project environments.",
    logo: "/images/journey/unhas.webp",
    organizationUrl: "",
    type: "education",
    status: "draft",
  },
  {
    id: "journey-03",
    period: "Feb 2025 — Jun 2025",
    title: "Junior Frontend Developer",
    organization: "CV. Afila Media Karya",
    description: "Identifying and resolving issues (debugging) in the e-Monev (Monitoring and Evaluation) application in Bulukumba Regency to improve the stability of the regency’s monitoring and evaluation system.",
    logo: "/images/journey/afila.webp",
    organizationUrl: "",
    type: "experience",
    status: "draft",
  },
  {
    id: "journey-02",
    period: "Agu 2024 — Des 2024",
    title: "Junior Full Stack Developer",
    organization: "Balai Besar Pelatihan Pertanian (BBPP) Batangkaluku",
    description: "Developed the SIBACO (Sistem Batangkaluku Cuti Online) application from the planning stage through implementation, digitizing the previously manual process of employee leave requests. Continuously monitored system performance and performed maintenance to ensure the application remained responsive and free of technical issues (bugs) after implementation.",
    logo: "/images/journey/bbpp.webp",
    organizationUrl: "",
    type: "experience",
    status: "draft",
  },
];
