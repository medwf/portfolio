'use client';
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Cloud, Database,
    Code2, Brain
} from "lucide-react";



export default function Skills() {
    const t = useTranslations("skills");
    const selectedLanguage = useLocale();

    // Skills data
    const skillCategories = [
        {
            title: t("lgp"),
            icon: Brain,
            color: "primary",
            skills: ["C", "Python", "JavaScript", "TypeScript", "Java"]
        },
        {
            title: t("fe"), icon: Brain,
            color: "secondary",
            skills: ["HTML5", "CSS", "Tailwind CSS", "ReactJS", "NextJS",
                "AngularJS", "Material-UI", "TreeJS"
            ]
        },
        {
            title: t("be"), icon: Code2,
            color: "primary",
            skills: ["Node.js", "Express.js", "NestJS", "Java Spring Boot", "Flask",
                "FastAPI", "REST API", "GraphQL"
            ]
        },
        {
            title: t("dataBigData"), icon: Database,
            color: "secondary",
            skills: ["SQL", "MySQL/MariaDB", "PostgreSQL", "PLSQL", "MongoDB", "RedisJS"]
        },
        {
            title: t("devops"), icon: Cloud,
            color: "primary",
            skills: ["Linux", "Git", "GitHub / GitLab", "Docker", "Docker Compose", "Kubernetes",
                "Terraform", "CI/CD (GitHub Actions, GitLab CI)", "Nginx", "Agile / Scrum"
            ]
        },
    ];


    const softSkills = selectedLanguage === "en"
        ? ["Leadership", "Team Management", "Project Management", "Problem Solving", "Communication", "Critical Thinking"]
        : ["Leadership", "Gestion d'équipe", "Gestion de projet", "Résolution de problèmes", "Communication", "Esprit critique"];


    return (
        <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="container mx-auto  px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        {t("title")} {" "}
                        <span className="gradient-text">
                            {t("techStack")}
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass glass-hover rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`p-2.5 rounded-xl ${category.color === "primary" ?
                                    "bg-primary/10 text-primary" :
                                    "bg-secondary/10 text-secondary"}`}>
                                    <category.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(
                                    (skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${category.color === "primary" ?
                                                "bg-primary/10 text-primary/90" :
                                                "bg-secondary/10 text-secondary/90"}`}>
                                            {skill}
                                        </span>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {softSkills.map(
                            (skill) => (
                                <span key={skill}
                                    className="px-4 py-2 rounded-full glass text-sm font-medium">
                                    {skill}
                                </span>
                            ))
                        }
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
