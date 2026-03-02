import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

type SocialLinks = {
  linkedin: string;
  github: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  socials: SocialLinks;
};

type SkillCategory = {
  category: string;
  skills: string[];
};

type ProfessionalExperience = {
  company: string;
  location: string;
  role: string;
  duration: string;
  achievements: string[];
};

type PersonalProject = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  githubLink: string;
  liveDemoLink: string | null;
  image: ImagePlaceholder;
};

type Education = {
  degree: string;
  cgpa: string;
  institution: string;
};

type PortfolioData = {
  name: string;
  title: string;
  contact: ContactInfo;
  professionalSummary: string;
  technicalSkills: SkillCategory[];
  professionalExperience: ProfessionalExperience[];
  personalProjects: PersonalProject[];
  education: Education;
};

export const portfolioData: PortfolioData = {
  name: "SELVAN S",
  title: "Full Stack Developer – ASP.NET Core & React",
  contact: {
    email: "selvan0023@gmail.com",
    phone: "+91 8825888437",
    location: "Coimbatore, Tamil Nadu, India",
    socials: {
      linkedin: "#", // Replace with your LinkedIn profile URL
      github: "#",   // Replace with your GitHub profile URL
    },
  },
  professionalSummary: "Full Stack Developer with 1.5+ years of experience building scalable web applications using ASP.NET Core and React. Strong in RESTful API development, frontend state management, and database integration (MySQL, MongoDB). Experienced in Agile environments, production support, and delivering end-to-end features from development to deployment.",
  technicalSkills: [
    { category: "Languages", skills: ["C#", "JavaScript (ES6+)", "TypeScript"] },
    { category: "Frontend", skills: ["React", "Redux", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", skills: ["ASP.NET Core Web API", "Node.js (Basic)", "Express.js"] },
    { category: "API & Security", skills: ["RESTful APIs", "JWT Authentication", "Role-Based Access Control (RBAC)"] },
    { category: "Databases", skills: ["MySQL", "MongoDB"] },
    { category: "Tools", skills: ["Git", "GitHub", "Postman"] },
    { category: "Practices", skills: ["Agile/Scrum", "Debugging", "Production Support"] },
  ],
  professionalExperience: [
    {
      company: "DevBee INC",
      location: "Coimbatore, India",
      role: "Software Developer",
      duration: "Sep 2022 – Present",
      achievements: [
        "Developed and enhanced 6+ production-ready frontend modules using React (TypeScript, Redux), ensuring responsive and reusable component architecture.",
        "Designed and implemented RESTful APIs using ASP.NET Core to support business workflows and data validation.",
        "Integrated MySQL and MongoDB databases; optimized queries, reducing average API response time by ~10–15%.",
        "Resolved 20+ production issues and reduced recurring defects through root cause analysis and permanent fixes.",
        "Delivered 3+ end-to-end features from requirement analysis to deployment in Agile sprints.",
        "Participated in peer code reviews and managed version control using Git-based workflows.",
      ],
    },
  ],
  personalProjects: [
    {
      id: "zoomcar-clone",
      title: "Zoomcar Clone – Full Stack Car Rental Platform",
      description: "Built a full-stack car rental platform with vehicle listing, booking, and user management features.",
      techStack: ["React", "Tailwind CSS", "ASP.NET Core", "JWT", "Stripe"],
      achievements: [
        "Implemented JWT-based authentication and role-based access control (Admin/User).",
        "Designed RESTful APIs for booking workflows and vehicle management modules.",
        "Integrated Stripe payment gateway for secure online transactions.",
        "Developed responsive UI using Tailwind CSS for cross-device compatibility.",
      ],
      githubLink: "#",
      liveDemoLink: null,
      image: PlaceHolderImages.find(img => img.id === 'zoomcar-clone-image')!,
    },
    {
      id: "todo-list",
      title: "Todo List Application – Task Management System",
      description: "Developed a full-stack task management application with user authentication.",
      techStack: ["React", "MongoDB", "Express.js", "Node.js"],
      achievements: [
        "Designed and implemented CRUD APIs with MongoDB integration.",
        "Implemented form validation and protected routes.",
        "Built a responsive and clean user interface for improved usability.",
      ],
      githubLink: "#",
      liveDemoLink: null,
      image: PlaceHolderImages.find(img => img.id === 'todo-list-image')!,
    },
  ],
  education: {
    degree: "Bachelor of Engineering in Electrical and Electronics",
    cgpa: "7.6",
    institution: "Akshaya College of Engineering and Technology, Coimbatore, TN, India",
  },
};
