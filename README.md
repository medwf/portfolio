# 🚀 Mohamed Wafi - Portfolio

A modern, responsive, and multilingual portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, internationalization (i18n), and a clean glassmorphism design.

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations using Framer Motion
- 🌍 **Multilingual** - Support for English and French using next-intl
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 15 App Router and optimized for speed
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- 📬 **WhatsApp Integration** - Contact form sends messages directly to WhatsApp
- 📊 **Google Analytics** - Track visitor analytics (optional)
- 🎭 **Dark Mode Ready** - Designed with dark theme aesthetics
- ♿ **Accessible** - ARIA attributes and keyboard navigation support

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** pnpm

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with i18n
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── icon.svg            # Favicon
│   └── robots.ts           # SEO robots file
├── src/
│   ├── Components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Project.tsx     # Projects portfolio
│   │   ├── Educations.tsx  # Education & experience
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer component
│   └── data/               # Centralized data files
│       ├── hero.ts         # Hero section data
│       ├── about.ts        # About section data
│       ├── skills.ts       # Skills data
│       ├── projects.ts     # Projects data
│       ├── education.ts    # Education & experience data
│       ├── contact.ts      # Contact information
│       ├── navigation.ts   # Navigation menu data
│       └── index.ts        # Data exports
├── messages/               # i18n translation files
│   ├── en.json            # English translations
│   └── fr.json            # French translations
├── i18n/                  # i18n configuration
│   ├── routing.ts         # Locale routing config
│   └── request.ts         # Request configuration
├── public/                # Static assets
│   ├── Icons/             # Icon assets
│   └── medwf.png          # Profile picture
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/medwf/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=your-ga-id-here
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🌐 Internationalization

The portfolio supports multiple languages. To add a new language:

1. Create a new translation file in `messages/` (e.g., `es.json`)
2. Add the locale to `i18n/routing.ts`
3. Copy the structure from existing translation files

## 🎨 Customization

### Personal Information

All data is centralized in the `src/data/` folder for easy management:

- Contact details: [src/data/contact.ts](src/data/contact.ts)
- Social links: [src/data/hero.ts](src/data/hero.ts)
- Skills: [src/data/skills.ts](src/data/skills.ts)
- Projects: [src/data/projects.ts](src/data/projects.ts)
- Education & Experience: [src/data/education.ts](src/data/education.ts)
- Navigation: [src/data/navigation.ts](src/data/navigation.ts)

### Styling

- Global styles: [app/[locale]/globals.css](app/[locale]/globals.css)
- Tailwind config: [tailwind.config.ts](tailwind.config.ts)
- Color scheme: Modify CSS variables in `globals.css`

### WhatsApp Integration

Update the WhatsApp number in [src/data/contact.ts](src/data/contact.ts):

```typescript
export const contactInfo = {
  phone: "+212 6 63 35 02 06",
  whatsappNumber: "212663350206", // Your number (country code + number)
  email: "medwf.dev@outlook.com",
} as const;
```

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/medwf/portfolio)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables (if using Google Analytics)
4. Deploy

### Other Platforms

Build the production version:

```bash
pnpm build
```

The output will be in the `.next` folder. Follow your hosting platform's Next.js deployment guide.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Wafi**

- Email: medwf.dev@outlook.com
- LinkedIn: [linkedin.com/in/medwf](https://linkedin.com/in/medwf)
- GitHub: [github.com/medwf](https://github.com/medwf)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/medwf/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using Next.js and TypeScript**
