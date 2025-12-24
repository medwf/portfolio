'use client';
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { CollapsibleTimeline } from "./CollapsibleTimeline";
import { workExperienceData, educationData } from "@/src/data/education";

export default function Educations() {
    const selectedLanguage = useLocale();
    const t = useTranslations("Experience");

    const workExperience = workExperienceData[selectedLanguage as keyof typeof workExperienceData] || workExperienceData.en;
    const education = educationData[selectedLanguage as keyof typeof educationData] || educationData.en;

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
                                                    tags={section.tags as any}
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
                                        {'description' in edu && edu.description &&
                                            <p className="text-muted-foreground text-sm mt-4">
                                                {edu.description}
                                            </p>
                                        }
                                        {
                                            'sections' in edu && edu.sections &&
                                            edu.sections.map((section, index: number) => (
                                                <CollapsibleTimeline
                                                    key={index}
                                                    tags={section.tags as any}
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
