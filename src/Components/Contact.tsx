'use client';
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send,
  Github, Linkedin, Download
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(t("formSuccess"));
      setFormData({ name: "", email: "", subject: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert(t("formError"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t("title")}
            <span className="gradient-text">
              {t("connect")}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("getInTouch")}</h3>
              <div className="space-y-4">
                <a href="mailto:medwf.dev@outlook.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:border-primary/30 transition-all group">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
                  </div>
                  <div className="min-w-0"><p className="text-xs sm:text-sm text-muted-foreground">
                    {t("email")}
                  </p>
                    <p className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                      medwf.dev@outlook.com
                    </p>
                  </div>
                </a>
                <a href="tel:+212663350206"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:border-primary/30 transition-all group">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">
                      +212 663 350 206
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-secondary/10 text-secondary shrink-0">
                    <MapPin className="h-4 sm:h-5 w-4 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Location
                    </p>
                    <p className="font-medium text-sm sm:text-base">
                      location
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("followMe")}</h3>
              <div className="flex gap-3">
                <a href="https://github.com/medwf" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:border-primary/50 hover:text-primary transition-all">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/medwf/" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:border-primary/50 hover:text-primary transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:medwf.dev@outlook.com" className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("downloadResume")}</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/MOHAMED_WAFI_en.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 py-2 rounded-lg text-sm font-medium border border-muted-foreground/30 bg-transparent text-foreground hover:bg-muted hover:border-primary/50 hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Download className="h-4 w-4" />
                  {t("englishCV")}
                </a>
                <a
                  href="/MOHAMED_WAFI_fr.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 py-2 rounded-lg text-sm font-medium border border-muted-foreground/30 bg-transparent text-foreground hover:bg-muted hover:border-primary/50 hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Download className="h-4 w-4" />
                  {t("frenchCV")}
                </a>
              </div>
            </div>
            {/* <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-3">{t("lookingForPFE")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("pfeDescription")}</p>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500">{t("openForOpportunities")}</span>
              </div>
            </div> */}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t("name")}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  required className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("namePlaceholder")} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t("email")}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  required className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("emailPlaceholder")} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">{t("subject")}</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder={t("subjectPlaceholder")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t("message")}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder={t("messagePlaceholder")} />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-8 text-base rounded-lg font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? t("sending") : (<>{t("send")}<Send className="ml-2 h-4 w-4" /></>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
