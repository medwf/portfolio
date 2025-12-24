import { Github, Linkedin, Mail } from "lucide-react";

export const socialLinks = [
  {
    href: "https://github.com/medwf",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/medwf/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:medwf.dev@outlook.com",
    icon: Mail,
    label: "Email",
  },
] as const;

export const profileImage = {
  src: "/medwf.png",
  alt: "Mohamed WAFI",
} as const;
