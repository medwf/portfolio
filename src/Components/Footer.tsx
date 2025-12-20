'use client';

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTranslations } from "next-intl";
const Footer = () => {
    const t = useTranslations();
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { label: t("Navbar.home"), section: "home" },
        { label: t("Navbar.about"), section: "about" },
        { label: t("Navbar.skills"), section: "skills" },
        { label: t("Navbar.projects"), section: "projects" },
        { label: t("Navbar.education"), section: "education" },
        { label: t("Navbar.contact"), section: "contact" },
    ];

    return (
        <footer className="py-6 sm:py-8 border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Nav */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button
                            onClick={() => scrollToSection("home")} className="text-xl font-bold">
                            <span className="gradient-text">MW</span>
                        </button>
                        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            {navLinks.map((link) => (
                                <button
                                    key={link.section}
                                    onClick={() => scrollToSection(link.section)}
                                    className="hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/medwf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/medwf/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:medwf.dev@outlook.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <span>{t("Footer.builtWith")}</span>
                        <Heart className="h-4 w-4 text-destructive fill-destructive" />
                        <span>{t("Footer.by")}</span>
                        <span className="font-semibold text-foreground">
                            Mohamed Wafi
                        </span>
                    </div>
                    <p>© {currentYear} {t("Footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
