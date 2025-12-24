import {
  Shield,
  Newspaper,
  Droplets,
  Boxes,
  Car,
  QrCode,
  Rocket,
} from "lucide-react";

// Shared tag arrays to avoid repetition
const cAdvancedTags = ["C", "C Advanced", "Linux"];
const cAlgorithmsTags = ["C programming", "Algorithms", "Data Structures"];
const workhubConnectTags = [
  "Python",
  "TypeScript",
  "ReactJS",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
];
const minutesManagementTags = [
  "AngularJS",
  ".Net",
  "SQL Server",
  "REST API",
  "Docker",
  "Docker Compose",
  "Ansible",
];

const bioMoroccoTags = ["Python", "TypeScript", "Flask", "REST API", "NextJS"];
const iktronTags = [
  "Python",
  "Flask",
  "Bootstrap",
  "Docker",
  "Ansible",
  "Google Search Console",
  "Google Analytics",
];

const persobikeTags = [
  "Python",
  "Flask",
  "Bootstrap",
  "Docker",
  "Ansible",
  "Google Search Console",
  "Google Analytics",
];

const deliciousRecipesTags = [
  "TypeScript",
  "Flask",
  "Docker",
  "Ansible",
  "ReactJS",
  "tailwindcss",
  "CSS",
  "REST API",
];
const portfolioTags = [
  "TypeScript",
  "ReactJS",
  "NextJS",
  "next-intl",
  "Tailwind CSS",
  "Eslint",
  "Framer Motion",
  "Google Search Console",
  "Google Analytics",
];

// Featured projects data with language-specific content
export const featuredProjects = {
  en: [
    {
      title: "WorkhubConnect",
      description:
        "A comprehensive platform to manage remote work, featuring task management, time tracking, team collaboration, and performance analytics.",
      icon: Shield,
      tags: workhubConnectTags,
      github: "https://github.com/medwf",
      badge: true,
      badgeText: "In Progress",
    },
    {
      title: "Minutes Management",
      description:
        "A simple and efficient system to manage, organize, and consult meeting minutes, facilitating tracking, archiving, and quick access to official documents.",
      icon: Newspaper,
      tags: minutesManagementTags,
      github: "https://github.com/youssefmaimouni",
    },
    {
      title: "BioMorocco",
      description:
        "An e-commerce platform focused on organic and sustainable products, connecting consumers with local farmers and producers.",
      icon: Droplets,
      tags: bioMoroccoTags,
      badge: true,
      badgeText: "In Progress",
      github: "https://github.com/medwf",
    },
    {
      title: "Iktron",
      description:
        "A web application for managing industrial equipment maintenance, including scheduling, tracking, and reporting features.",
      icon: Shield,
      tags: iktronTags,
      github: "https://iktron.ma",
    },
    {
      title: "Persobike",
      description:
        "A web application that provides personalized bike recommendations, maintenance tips, and cycling routes based on user preferences and location.",
      icon: Shield,
      tags: persobikeTags,
      github: "https://persobike.fr",
      badge: true,
      badgeText: "In Progress",
    },
    {
      title: "Deliciouse Recipes",
      description:
        "A web application that allows users to discover, share, and manage delicious recipes from around the world, with admin dashboard management.",
      icon: Shield,
      tags: deliciousRecipesTags,
      github: "https://www.deliciousrecipes.us",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects, skills, and experience, built with modern web technologies.",
      icon: Rocket,
      tags: portfolioTags,
      github: "https://github.com/medwf/portfolio",
    },
  ],
  fr: [
    {
      title: "WorkhubConnect",
      description:
        "Une plateforme complète pour gérer le travail à distance, avec gestion des tâches, suivi du temps, collaboration d'équipe et analyse des performances.",
      icon: Shield,
      tags: workhubConnectTags,
      github: "https://github.com/medwf",
      badge: true,
      badgeText: "En cours",
    },
    {
      title: "Gestion des Procès-Verbaux",
      description:
        "Un système simple et efficace pour gérer, organiser et consulter les procès-verbaux, facilitant le suivi, l'archivage et l'accès rapide aux documents officiels.",
      icon: Newspaper,
      tags: minutesManagementTags,
      github: "https://github.com/youssefmaimouni",
    },
    {
      title: "BioMorocco",
      description:
        "e-commerce platform focused on organic and sustainable products, connecting consumers with local farmers and producers.",
      icon: Droplets,
      tags: bioMoroccoTags,
      badge: true,
      badgeText: "En cours",
      github: "https://github.com/medwf",
    },
    {
      title: "Iktron",
      description:
        "Une application web de gestion de la maintenance des équipements industriels, incluant des fonctionnalités de planification, de suivi et de reporting.",
      icon: Shield,
      tags: iktronTags,
      github: "https://iktron.ma",
    },
    {
      title: "Persobike",
      description:
        "Une application web qui fournit des recommandations de vélos personnalisées, des conseils d'entretien et des itinéraires cyclables en fonction des préférences et de la localisation de l'utilisateur.",
      icon: Shield,
      tags: persobikeTags,
      github: "https://persobike.fr",
      badge: true,
      badgeText: "En cours",
    },
    {
      title: "Deliciouse Recipes",
      description:
        "Une application web qui permet aux utilisateurs de découvrir, partager et gérer de délicieuses recettes du monde entier, avec une gestion du tableau de bord administrateur.",
      icon: Shield,
      tags: deliciousRecipesTags,
      github: "https://www.deliciousrecipes.us",
    },
    {
      title: "Portfolio Website",
      description:
        "Un site web de portfolio personnel pour présenter des projets, des compétences et de l'expérience, construit avec des technologies web modernes.",
      icon: Rocket,
      tags: portfolioTags,
      github: "https://github.com/medwf/portfolio",
    },
  ],
} as const;

// Other projects data (language-independent)
export const otherProjects = [
  {
    title: "Printf",
    icon: Car,
    tags: cAdvancedTags,
    github: "https://github.com/medwf/printf",
  },
  {
    title: "Simple shell",
    icon: Boxes,
    tags: cAdvancedTags,
    github: "https://github.com/medwf/simple_shell",
  },
  {
    title: "Monty",
    icon: QrCode,
    tags: ["C", "FIFO/LIFO", "Stacks, Queues"],
    github: "https://github.com/medwf/monty",
  },
  {
    title: "Sorting Algorithms",
    icon: QrCode,
    tags: cAlgorithmsTags,
    github: "https://github.com/medwf/sorting_algorithms",
  },
  {
    title: "Searching Algorithms",
    icon: QrCode,
    tags: cAlgorithmsTags,
    github:
      "https://github.com/medwf/alx-low_level_programming/0x1E-search_algorithms",
  },
  {
    title: "Binary Trees",
    icon: QrCode,
    tags: cAlgorithmsTags,
    github: "https://github.com/medwf/binary_trees",
  },
  {
    title: "GestionBiblioth-que",
    icon: QrCode,
    tags: cAlgorithmsTags,
    github: "https://github.com/medwf/GestionBiblioth-que",
  },
  {
    title: "File Manager",
    icon: QrCode,
    tags: ["NodeJS", "ExpressJS", "MongoDB", "REST API", "Redis"],
    github: "https://github.com/medwf/alx-files_manager",
  },
] as const;
