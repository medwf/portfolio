import { Cloud, Database, Code2, Brain } from "lucide-react";

// Skill categories with translation keys
export const skillCategories = [
  {
    translationKey: "lgp",
    icon: Brain,
    color: "primary" as const,
    skills: ["C", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    translationKey: "fe",
    icon: Brain,
    color: "secondary" as const,
    skills: [
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "ReactJS",
      "NextJS",
      "AngularJS",
      "Material-UI",
      "TreeJS",
    ],
  },
  {
    translationKey: "be",
    icon: Code2,
    color: "primary" as const,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Java Spring Boot",
      "Flask",
      "FastAPI",
      "REST API",
      "GraphQL",
    ],
  },
  {
    translationKey: "dataBigData",
    icon: Database,
    color: "secondary" as const,
    skills: [
      "SQL",
      "MySQL/MariaDB",
      "PostgreSQL",
      "PLSQL",
      "MongoDB",
      "RedisJS",
    ],
  },
  {
    translationKey: "devops",
    icon: Cloud,
    color: "primary" as const,
    skills: [
      "Linux",
      "Git",
      "GitHub / GitLab",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Nginx",
      "Agile / Scrum",
    ],
  },
] as const;

// Soft skills by language
export const softSkillsByLanguage = {
  en: [
    "Leadership",
    "Team Management",
    "Project Management",
    "Problem Solving",
    "Communication",
    "Critical Thinking",
  ],
  fr: [
    "Leadership",
    "Gestion d'équipe",
    "Gestion de projet",
    "Résolution de problèmes",
    "Communication",
    "Esprit critique",
  ],
} as const;
