export type Achievement = {
  id: string;
  number: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: "certification" | "recognition" | "contribution";
  image?: string;
  credentialUrl?: string;
  status: "draft" | "published";
};

export const achievements: Achievement[] = [
  {
    id: "achievement-01",
    number: "1",
    title: "Javascript OOP",
    issuer: "CoddyTech",
    year: "2026",
    description: "This certification validates advanced competency in object-oriented software development using modern JavaScript (ES6+). Tested competencies include the application of fundamental concepts such as inheritance, encapsulation, polymorphism, and abstraction using classes and prototypes.",
    category: "certification",
    image: "/images/achievements/jsoop.webp",
    credentialUrl: "",
    status: "draft",
  },
  {
    id: "achievement-02",
    number: "2",
    title: "Web Programming Assistant Coordinator",
    issuer: "Departement Mathematics of Hasanuddin University",
    year: "2025",
    description: "Led and organized a team of 13 lab assistants to ensure that all lab activities ran smoothly and in accordance with curriculum standards.",
    category: "certification",
    image: "/images/achievements/asisten.webp",
    credentialUrl: "",
    status: "draft",
  },
  {
    id: "achievement-03",
    number: "3",
    title: "Internship - CV. Afila Media Karya",
    issuer: "CV. Afila Media Karya",
    year: "2025",
    description: "Successfully completed an internship as a Junior Frontend Developer at CV. Afila Media Karya, where I was responsible for transforming UI/UX designs into responsive and interactive web components.",
    category: "certification",
    image: "/images/achievements/afila.webp",
    credentialUrl: "",
    status: "draft",
  },
  {
    id: "achievement-04",
    number: "4",
    title: "Internship - BBPP Batangkaluku",
    issuer: "BBPP Batangkaluku",
    year: "2025",
    description: "Through this training, participants are equipped with practical skills ranging from the use of agricultural management applications, digital-based weather monitoring, to optimizing e-commerce platforms to shorten the digital distribution chain.",
    category: "recognition",
    image: "/images/achievements/bbpp.webp",
    credentialUrl: "",
    status: "draft",
  },

];
