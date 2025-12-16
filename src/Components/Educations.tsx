'use client';
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";


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
                    ? "June – Sept 2025"
                    : "Juin – Sept 2025",
            description:
                selectedLanguage === "en"
                    ? "Completed an official Next.js training focused on the App Router architecture, including server components, routing patterns, layouts, data fetching, caching, API routes, and deployment best practices."
                    : "Formation officielle Next.js centrée sur l’architecture App Router : Server Components, routing, layouts, data fetching, caching, API routes et bonnes pratiques de déploiement.",
            tags: [
                "Next.js",
                "React",
                "App Router",
                "Server Components",
                "SSR / SSG",
                "API Routes"
            ]
        },
        {
            title:
                selectedLanguage === "en"
                    ? "Software Engineering | Backend Development"
                    : "Software Engineering | Backend Development",
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
            tags: [
                "Python",
                "Flask",
                "Django",
                "Node.js",
                "ES6+",
                "REST API",
                "GraphQL",
                "SQL",
                "PostgreSQL",
                "Linux",
                "DevOps",
                "Nginx",
                "HAProxy",
                "UFW",
                "SSH",
                "DNS",
                "SSL/TLS",
                "Algorithms",
                "Data Structures",
                "C Programming",
                "Git",
                "Shell Scripting"
            ]
        }
    ];

    const education = [
        {
            title: selectedLanguage === "en" ? "License | Developer Full-Stack & DevOps" : "License | Developer Full-Stack & DevOps",
            school: "Faculte des sciences Ain Chock – Morocco, Casablanca",
            period: "2025 – 2026",
            description: selectedLanguage === "en" ? "Currently pursuing a Bachelor's degree in Full-Stack Development and DevOps, focusing on web development, cloud computing, and software engineering principles." :
                "Actuellement en Licence Développeur Full-Stack & DevOps, axée sur le développement web, le cloud computing et les principes d'ingénierie logicielle.",
            tags: ["Full-Stack Development", "DevOps", "Cloud Computing", "Software Engineering"]
        },
        {
            title: selectedLanguage === "en" ? "Maintenance System Electronic " : "Système de Maintenance Électronique",
            school: "ISIC – Morocco, Casablanca",
            period: "2016 – 2018"
        },
        {
            title: selectedLanguage === "en" ? "Bachelor's in Life and Earth Sciences" : "Baccalauréat en Sciences de la Vie et de la Terre",
            school: selectedLanguage === "en" ? "Ibn Roumi - Morocco, Casablanca" : "Ibn Roumi - Morocco, Casablanca",
            period: "2013 – 2014"
        },
    ];

    return (
        <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("title")} <span className="gradient-text">{t("education")}</span></h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">

                    {/* Work */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-3 mb-8"><div className="p-2.5 rounded-xl bg-primary/10 text-primary"><Briefcase className="h-5 w-5" /></div>
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
                                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="font-semibold text-lg">{job.title}</h4>
                                                <p className="text-primary">{job.company}</p>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm"><Calendar className="h-3.5 w-3.5" />{job.period}</div>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-2">{job.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">{tag}</span>))}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-3 mb-8"><div className="p-2.5 rounded-xl bg-secondary/10 text-secondary"><GraduationCap className="h-5 w-5" /></div><h3 className="text-2xl font-bold">{t("edu")}</h3></div>
                        <div className="relative pl-8 border-l-2 border-border space-y-8">
                            {education.map((edu, index) => (
                                <motion.div key={edu.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                    <div className="glass rounded-xl p-6 hover:border-secondary/30 transition-all">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <div><h4 className="font-semibold text-lg">{edu.title}</h4><p className="text-secondary text-sm">{edu.school}</p></div>
                                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm"><Calendar className="h-3.5 w-3.5" />{edu.period}</div>
                                        </div>
                                        {
                                            edu.description && <p className="text-muted-foreground text-sm mt-4">{edu.description}</p>
                                        }
                                        {
                                            edu?.tags && <div className="flex flex-wrap gap-2 mt-4">{edu.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">{tag}</span>))}</div>
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
