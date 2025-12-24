'use client';
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Github, Rocket, ExternalLink } from "lucide-react";
import { featuredProjects, otherProjects } from "@/src/data/projects";

export default function Projects() {
    const selectlanguage = useLocale();
    const t = useTranslations("Projects");

    const projects = featuredProjects[selectlanguage as keyof typeof featuredProjects] || featuredProjects.en;

    return (
        <section id="projects" className="py-16 sm:py-24 relative overflow-hidden" >
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-150 h-75 sm:h-150 bg-gradient-radial from-primary/10 via-transparent to-transparent" /></div>
            <div className="container mx-auto  px-4 sm:px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        {t("title")} {" "}
                        <span className="gradient-text">
                            {t("featured")}
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-10 sm:mb-16">
                    {projects.map((project, index) => (
                        <motion.div key={project.title} initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {('badge' in project && project.badge) &&
                                <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r from-amber-500 to-yellow-500 text-background text-[14px] font-bold z-10">
                                    {'badgeText' in project && project.badgeText}
                                    <Rocket className="h-4 w-4" />
                                </div>}
                            <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all">
                                <div className="w-full h-40 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                    <project.icon className="h-[90%] w-[90%]" />
                                </div>
                                <h3 className="text-xl text-center font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-center text-sm mb-5 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex justify-between flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag}
                                            className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                                    <Github className="h-4 w-4" />
                                    {t("viewCode")}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
                            <Github className="h-5 w-5" />
                            {t("viewAll")} <ExternalLink className="h-4 w-4" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    )
}
