'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "@/public/medwf.png";
import {
    MapPin, Phone, Mail, GraduationCap,
    Calendar, Briefcase, Award, Users
} from "lucide-react";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function About() {
    const t = useTranslations("about");
    const th = useTranslations("HomePage");

    const stats = [
        { label: t("yearsLearning"), value: "3+", icon: Calendar },
        { label: t("projectsCompleted"), value: "5+", icon: Briefcase },
        { label: t("hackathonsWon"), value: "3", icon: Award },
        { label: t("techCommunities"), value: "2", icon: Users },
    ];

    return (
        <section id="about" className="py-16 sm:py-24" >
            {/* About Section */}
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        {t("title")} <span className="gradient-text">{t("me")}</span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
                            <div className="glass rounded-2xl p-6">
                                <div className="text-center mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/30">
                                        <Image src={profilePicture} alt="Mohamed Wafi" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h3 className="text-xl font-bold">Mohamed Wafi</h3>
                                    <p className="text-primary text-sm">{th("role")}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm">
                                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                                        <span className="text-muted-foreground truncate">{t("location")}</span></div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">+212 663 350 206</span></div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs sm:text-sm truncate">medwf.dev@outlook.com</span></div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <GraduationCap className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground text-xs sm:text-sm">Licence Developper Full Stack & DevOps</span></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-8">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">👨‍💻</span>{t("whoIAm")}</h3>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("bio1")}</p>
                                    <p>{t("bio2")}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {stats.map((stat) => (
                                    <div key={stat.label}
                                        className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all cursor-pointer"
                                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3"><stat.icon className="h-5 w-5 text-primary" /></div>
                                        <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}
