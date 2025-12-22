'use client';

import { useLocale, useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import profilePicture from "@/public/medwf.png";
import Image from "next/image";
import {
    Github, Linkedin, Mail,
    Download, ArrowRight, MapPin,
} from "lucide-react";


export default function Hero() {
    const t = useTranslations('HomePage');
    const locale = useLocale();

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" >
            <div className="absolute inset-0 grid-pattern" />
            <div className="absolute top-1/4 -left-16 md:-left-32 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[128px]" />
            <div className="absolute bottom-1/4 -right-16 md:-right-32 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[80px] md:blur-[128px]" />

            <motion.div
                className="absolute top-20 right-4 md:right-20 w-3 md:w-4 h-3 md:h-4 rounded-full bg-primary/60 hidden sm:block"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-40 left-4 md:left-20 w-2 md:w-3 h-2 md:h-3 rounded-full bg-secondary/60 hidden sm:block"
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="container relative z-10 px-4 sm:px-6">
                <motion.div variants={containerVariants} initial="hidden"
                    animate="visible" className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        <motion.div variants={itemVariants} className="relative">
                            <div
                                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-gradient">
                                <Image src={profilePicture}
                                    alt="Mohamed WAFI"
                                    className="w-full h-full object-cover object-top" />
                            </div>
                            {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-[12px] sm:text-xs text-muted-foreground whitespace-nowrap">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                {t("openForPFE")}
                            </div> */}
                        </motion.div>

                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                variants={itemVariants}
                                className="mb-4">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                                    <MapPin />
                                    {t("location")}
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
                                {t("greeting")} {" "}
                                <span className="gradient-text">Mohamed</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
                                {t("role")}
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed">
                                {t.rich("description", {
                                    br: () => <br />
                                })}
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base rounded-lg font-medium bg-linear-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    {t("viewProjects")}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                                <a href={`/MOHAMED_WAFI_${locale}.pdf`}
                                    download
                                    className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base rounded-lg font-medium border border-muted-foreground/30 bg-transparent text-foreground hover:bg-muted hover:border-primary/50 hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    <Download className="h-4 w-4" />
                                    {t("downloadCV")}
                                </a>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
                                <a href="https://github.com/medwf" target="_blank" rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/medwf/" target="_blank" rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="mailto:medwf.dev@outlook.com"
                                    className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                                    <Mail className="h-5 w-5" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
