'use client';
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
    Github, Trophy, ExternalLink
    , Shield, Newspaper, Droplets,
    Boxes, Car, QrCode
} from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const selectlanguage = useLocale();
    const t = useTranslations("Projects");

    const featuredProjects = [
        {
            title: "WorkhubConnect",
            description: selectlanguage === "en" ?
                "A comprehensive platform to manage remote work, featuring task management, time tracking, team collaboration, and performance analytics." :
                "Une plateforme complète pour gérer le travail à distance, avec gestion des tâches, suivi du temps, collaboration d'équipe et analyse des performances.",
            icon: Shield,
            tags: ["Python", "TypeScript", "ReactJS", "Node.js", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
            github: "https://github.com/medwf"
        },
        {
            title: "e-Markaz",
            description: selectlanguage === "en" ?
                "A simple and efficient system to manage, organize, and consult meeting minutes, \
                    facilitating tracking, archiving, and quick access to official documents." :
                "Un système simple et efficace pour gérer, \
                    organiser et consulter les procès-verbaux, facilitant le suivi, \
                    l’archivage et l’accès rapide aux documents officiels.",
            icon: Newspaper,
            tags: [
                "AngularJS", ".Net", "SQL Server", "REST API",
                "Docker", "Docker Compose", "Ansible"
            ],
            github: "https://github.com/youssefmaimouni"
        },
        {
            title: "BioMorocco",
            description: selectlanguage === "en" ?
                "An e-commerce platform focused on organic and sustainable products, \
                    connecting consumers with local farmers and producers ." :
                "e-commerce platform focused on organic and sustainable products,\
                    connecting consumers with local farmers and producers.",
            icon: Droplets,
            tags: [
                "Python", "TypeScript",
                "Flask", "REST API",
                "NextJS"
            ],
            badge: true,
            github: "https://github.com/medwf"
        },
    ];

    const freeLanceProjects = [
        {
            title: "Iktron",
            icon: '/Icons/iktron-logo.png',
            tags: ["Python", "Flask", "ReactJS", "Docker", "Ansible"],
            github: "https://iktron.ma"
        },
        {
            title: "Persobike",
            icon: '/Icons/persobike-logo.png',
            tags: ["Python", "Flask", "ReactJS", "Docker", "Ansible"],
            github: "https://persobike.fr"
        },
        {
            title: "Deliciouse Recipes",
            icon: '/Icons/deliciousrecipes-logo.png',
            tags: [
                "TypeScript", "Flask", "Docker", "Ansible",
                "ReactJS", "tailwindcss", "CSS", "REST API",
            ],
            github: "https://www.deliciousrecipes.us"
        },
    ];

    const otherProjects = [
        {
            title: "Printf",
            icon: Car,
            tags: ["C", "C Advanced", "Linux"],
            github: "https://github.com/medwf/printf"
        },
        {
            title: "Simple shell",
            icon: Boxes,
            tags: ["C", "C Advanced", "Linux"],
            github: "https://github.com/medwf/simple_shell"
        },
        {
            title: "Monty",
            icon: QrCode,
            tags: [
                "C", "FIFO/LIFO", "Stacks, Queues"
            ],
            github: "https://github.com/medwf/monty"
        },
        {
            title: "Sorting Algorithms",
            icon: QrCode,
            tags: [
                "C programming", "Algorithms", "Data Structures"
            ],
            github: "https://github.com/medwf/sorting_algorithms"
        },
        {
            title: "Binary Trees",
            icon: QrCode,
            tags: [
                "C programming", "Algorithms", "Data Structures"
            ],
            github: "https://github.com/medwf/binary_trees"
        },
        {
            title: "File Manager",
            icon: QrCode,
            tags: [
                "NodeJS", "ExpressJS", "MongoDB", "REST API",
                "Redis"
            ],
            github: "https://github.com/medwf/alx-files_manager"
        },
        {
            title: "GestionBiblioth-que",
            icon: QrCode,
            tags: [
                "C programming", "Algorithms", "Data Structures"
            ],
            github: "https://github.com/medwf/GestionBiblioth-que"
        },
        {
            title: "GestionBiblioth-que",
            icon: QrCode,
            tags: [
                "C programming", "Algorithms", "Data Structures"
            ],
            github: "https://github.com/medwf/GestionBiblioth-que"
        },
    ];

    return (
        <section id="projects" className="py-16 sm:py-24 relative overflow-hidden" >
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" /></div>
            <div className="container mx-auto  px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t("title")} <span className="gradient-text">{t("featured")}</span></h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-10 sm:mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div key={project.title} initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {project.badge &&
                                <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-xs font-semibold z-10">
                                    <Trophy className="h-3 w-3" /> 1st Place
                                </div>}
                            <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
                                <div className="w-full h-[160px] rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                    <project.icon className="h-[90%] w-[90%]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag}
                                            className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /> {t("viewCode")}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">{t("free")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                        {freeLanceProjects.map((project, index) => (
                            <motion.a key={project.title} href={project.github} target="_blank"
                                rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -4 }}
                                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                        <Image width={28} height={28} src={project.icon} alt={project.title} className="h-22 w-full" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-xl group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h4>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) =>
                                            (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto mt-14">
                    <h3 className="text-2xl font-bold text-center mb-8">{t("other")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                        {otherProjects.map((project, index) => (
                            <motion.a key={project.title} href={project.github} target="_blank"
                                rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -4 }}
                                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                        <project.icon className="h-8 w-full" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h4>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} className="text-center mt-12">
                        <a href="https://github.com/medwf" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
                            <Github className="h-5 w-5" /> {t("viewAll")} <ExternalLink className="h-4 w-4" /></a>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    )
}
