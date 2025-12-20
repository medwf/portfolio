'use client';
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, ChevronDown, Github } from "lucide-react";
import { useState } from "react";
import { title } from "process";

// Collapsible Timeline Component for Tags
interface TimelineItem {
    title: string;
    repo?: string;
}

interface CollapsibleTimelineProps {
    title: string;
    tags: TimelineItem[];
}

function CollapsibleTimeline({ tags, title }: CollapsibleTimelineProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mt-4 ml-3">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1 -ml-2"
                aria-expanded={isExpanded}
                aria-controls="timeline-content"
            >
                <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
                <span className="gradient-text text-[1rem]">{title}</span>
                <span className="text-xs text-muted-foreground">
                    {tags?.length}
                </span>
            </button>

            <div
                id="timeline-content"
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ?
                    'max-h-500 opacity-100 mt-4' :
                    'max-h-0 opacity-0'
                    }`}
                role="region"
                aria-labelledby="timeline-button"
            >
                <div className="flex flex-wrap gap-4 justify-start ml-4">
                    {tags?.map((tag, index) => (
                        <span
                            key={`${tag?.title}-${index}`}
                            className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-[0.85rem] font-medium inline-flex items-center gap-2 transition-all duration-300 hover:bg-secondary/20 hover:scale-105"
                        >
                            {tag.repo && (
                                <a
                                    href={`https://github.com/medwf${tag.repo}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                                    aria-label={`View ${tag.title} on GitHub`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            )}
                            {tag.title}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default function Educations() {
    const selectedLanguage = useLocale();
    const t = useTranslations("Experience");

    // Experience data
    const workExperience = [
        {
            title:
                selectedLanguage === "en"
                    ? "Next.js App Router | Fundamentals"
                    : "Next.js App Router | Fundamentals",
            company:
                selectedLanguage === "en"
                    ? "Official Next.js Platform"
                    : "Plateforme officielle Next.js",
            period:
                selectedLanguage === "en"
                    ? "June - Sept 2025"
                    : "Juin - Sept 2025",
            description:
                selectedLanguage === "en"
                    ? "Completed an official Next.js training focused on the App Router architecture, including server components, routing patterns, layouts, data fetching, caching, API routes, and deployment best practices."
                    : "Formation officielle Next.js centrée sur l’architecture App Router : Server Components, routing, layouts, data fetching, caching, API routes et bonnes pratiques de déploiement.",
            sections: [
                {
                    title: "ReactJS Fondations",
                    tags: [
                        { title: "JavaScript ES6+" }, { title: "React" },
                        { title: "JSX" }, { title: "Components" }, { title: "Props & State" },
                        { title: "Lifecycle Methods" }, { title: "Hooks" },
                    ]
                },
                {
                    title: "Next.js Page Router",
                    tags: [
                        { title: "Pages" }, { title: "Routing" }, { title: "Data Fetching" }, { title: "API Routes" },
                        { title: "SSR / SSG" }, { title: "Deployment" },
                    ]
                },
            ]
        },
        {
            title:
                selectedLanguage === "en"
                    ? "Software Engineering Backend Development"
                    : "Software Engineering Backend Development",
            company:
                selectedLanguage === "en"
                    ? "ALX Africa (Holberton School) – Remote"
                    : "ALX Africa (Holberton School) – Remote",
            period:
                selectedLanguage === "en"
                    ? "2022 – 2023"
                    : "2022 – 2023",
            description:
                selectedLanguage === "en"
                    ? "Completed ALX Africa’s intensive project-based Software Engineering program powered by Holberton. Specialized in backend development, systems engineering, networking, and algorithms through real-world projects such as WorkHubConnect."
                    : "Programme intensif ALX Africa basé sur des projets réels (Holberton). Spécialisation en développement backend, systèmes, réseaux et algorithmes, avec des projets tels que WorkHubConnect.",
            sections: [
                {
                    title: "Fondations of Software Engineering",
                    tags: [
                        {
                            title: "Git & GitHub",
                            repo: "/alx-pre_course/tree/master/0x01-git"
                        },
                        {
                            title: "command-line & Editors",
                            repo: "/alx-pre_course"
                        },
                        {
                            title: "Bash Introduction to advanced",
                            repo: "/alx-system_engineering-devops"
                        },
                        {
                            title: "C Programming basic to intermediate",
                            repo: "/alx-low_level_programming"
                        },
                        {
                            title: "Build your own Printf",
                            repo: "/printf"
                        },
                        {
                            title: "build your own Shell",
                            repo: "/simple_shell"
                        },

                        {
                            title: "Algorithms & Data Structures basics",
                            repo: "/sorting_algorithms"
                        },
                        {
                            title: "Python Programming basic to advanced",
                            repo: "/alx-higher_level_programming"
                        },
                        {
                            title: "File I/O serialization/deserialization",
                            repo: ""
                        },
                        {
                            title: "HTML5 & CSS fundamentals",
                            repo: ""
                        },
                        {
                            title: "SQL & Databases basics",
                            repo: "/0x0D-SQL_introduction"
                        },
                        {
                            title: "Networking fundamentals",
                            repo: "/alx-system_engineering-devops/0x07-networking_basics"
                        },
                        {
                            title: "RESTful API development",
                            repo: ""
                        },
                        {
                            title: "SSH & SSL/TLS basics",
                            repo: "/alx-system_engineering-devops/0x10-https_ssl"
                        },
                        {
                            title: "Firewalls & Security essentials",
                            repo: "/alx-system_engineering-devops/0x13-firewall"
                        },

                    ]
                },
                {
                    title: "Specialization in Backend Development",
                    tags: [
                        {
                            title: "Advenced ES6+ & Unittests", repo: "/alx-backend-javascript"
                        },
                        {
                            title: "TypeScript", repo: "/alx-backend-javascript"
                        },
                        {
                            title: "MySQL advenced & NoSQL databases", repo: "/alx-backend-storage"
                        },
                        {
                            title: "API pagination", repo: "/alx-backend"
                        },
                        {
                            title: "Caching strategies", repo: ""
                        },
                        {
                            title: "Unit & integration testing", repo: ""
                        },
                        {
                            title: "Internationalization(i18n)", repo: ""
                        },
                        {
                            title: "Personal data handling", repo: ""
                        },
                        {
                            title: "User authentication", repo: ""
                        },
                        {
                            title: "Node.js fundamentals", repo: ""
                        },
                        {
                            title: "Queueing systems", repo: ""
                        },
                        {
                            title: "GraphQL API development", repo: ""
                        },
                        {
                            title: "Asynchronous file API", repo: ""
                        },
                    ]
                }
            ]
        }
    ];

    const education = [
        {
            title: selectedLanguage === "en" ?
                "License | Developer Full-Stack & DevOps" :
                "License | Developer Full-Stack & DevOps",
            school: "Faculte des sciences Ain Chock - Morocco, Casablanca",
            period: "2025 - 2026",
            description: selectedLanguage === "en" ?
                "Currently pursuing a Bachelor's degree in Full-Stack Development and DevOps, focusing on web development, cloud computing, and software engineering principles." :
                "Actuellement en Licence Développeur Full-Stack & DevOps, axée sur le développement web, le cloud computing et les principes d'ingénierie logicielle.",
            sections: [
                {
                    title: "Fondations of Full-Stack Development",
                    tags: [
                        { title: "HTML5 & CSS3" },
                        { title: "Ecma Script" },
                        { title: "TypeScript" },
                        { title: "Java Programming" },
                    ]
                },
                {
                    title: "Frontend Development",
                    tags: [
                        { title: "ReactJS" },
                        { title: "AngularJS" },
                    ],
                },
                {
                    title: "Backend Development & Databases",
                    tags: [
                        { title: "J2EE" },
                        { title: "Spring Boot" },
                        { title: "PL/SQL" },
                        { title: "NoSQL" },
                    ],
                },
                {
                    title: "DevOps",
                    tags: [
                        { title: "GIT" },
                        { title: "Docker containerization" },
                        { title: "Kubernetes" },
                        { title: "Ansible Automation" },
                        { title: "Azure DevOps" },
                    ],
                }
            ]
        },
        {
            title: selectedLanguage === "en" ?
                "Maintenance System Electronic " :
                "Système de Maintenance Électronique",
            school: "ISIC - Morocco, Casablanca",
            period: "2016 - 2018"
        },
        {
            title: selectedLanguage === "en" ?
                "Bachelor's in Life and Earth Sciences" :
                "Baccalauréat en Sciences de la Vie et de la Terre",
            school: selectedLanguage === "en" ?
                "Ibn Roumi - Morocco, Casablanca" :
                "Ibn Roumi - Morocco, Casablanca",
            period: "2013 – 2014"
        },
    ];

    return (
        <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        {t("title")} <span className="gradient-text">{t("education")}</span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">

                    {/* Work */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                <Briefcase className="h-5 w-5" /></div>
                            <h3 className="text-2xl font-bold">{t("work")}</h3>
                        </div>
                        <div className="relative pl-8 border-l-2 border-border space-y-8">
                            {workExperience.map((job, index) => (
                                <motion.div
                                    key={job.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-10.5 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="font-semibold text-lg">{job.title}</h4>
                                                <p className="text-primary">{job.company}</p>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {job.period}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {job.description}
                                        </p>
                                        {
                                            job.sections &&
                                            job.sections.map((section, index) => (
                                                <CollapsibleTimeline
                                                    key={index}
                                                    tags={section.tags}
                                                    title={section.title}
                                                />
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                                <GraduationCap className="h-5 w-5" /></div>
                            <h3 className="text-2xl font-bold">{t("edu")}</h3>
                        </div>
                        <div className="relative pl-8 border-l-2 border-border space-y-8">
                            {education.map((edu, index) => (
                                <motion.div key={edu.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                                    <div className="absolute -left-10.25 top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                    <div className="glass rounded-xl p-6 hover:border-secondary/30 transition-all">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <div>
                                                <h4 className="font-semibold text-lg">
                                                    {edu.title}
                                                </h4>
                                                <p className="text-secondary text-sm">
                                                    {edu.school}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {edu.period}
                                            </div>
                                        </div>
                                        {edu.description &&
                                            <p className="text-muted-foreground text-sm mt-4">
                                                {edu.description}
                                            </p>
                                        }
                                        {
                                            edu.sections &&
                                            edu.sections.map((section, index) => (
                                                <CollapsibleTimeline
                                                    key={index}
                                                    tags={section.tags}
                                                    title={section.title}
                                                />
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
