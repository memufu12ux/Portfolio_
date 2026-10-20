# Francis Basence — Quality Assurance Portfolio

A responsive personal portfolio website for **Francis Basence**, Quality Assurance (QA) professional. Designed with a cyber-noir, futuristic, minimalist aesthetic featuring pure black (`#000000`), neon purple (`#A020F0`), electric violet (`#8B00FF`), and soft lavender (`#C77DFF`).

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with typography & meta tags
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies & scripts
├── public/                      # Static assets (place your custom resume PDF here)
│   ├── assets/                  # Reference images & assets
│   └── Francis_Basence_Resume.pdf # Target location for your resume PDF
├── src/
│   ├── App.tsx                  # Main application orchestrator & scroll spy
│   ├── config.ts                # Centralized portfolio configuration (email, text, links)
│   ├── index.css                # Tailwind CSS v4 styling & neon glow utilities
│   ├── main.tsx                 # React DOM root entry
│   └── components/
│       ├── FBLogo.tsx           # Custom geometric purple "FB" monogram SVG
│       ├── Navbar.tsx           # Fixed navbar with active glowing indicator & mobile drawer
│       ├── Hero.tsx             # 16:9 cyber-noir hero section with 01 vertical indicator & focus panel
│       ├── AboutSection.tsx     # QA philosophy, standards & core pillars
│       ├── ServicesSection.tsx  # Interactive QA services & deliverables
│       ├── ExperienceSection.tsx # QA competencies & career timeline
│       ├── ProjectsSection.tsx  # QA test cases, defect reports & modal inspection
│       ├── ContactSection.tsx   # Direct inquiry form & clipboard email copy
│       ├── ResumeModal.tsx      # Interactive resume viewer with print & download
│       └── Footer.tsx           # Minimalist cyber-noir footer & scroll-to-top
└── tsconfig.json
```

---

## 🚀 Running the Website Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 Connecting Your Real Resume PDF

1. Name your PDF file `Francis_Basence_Resume.pdf` (or any name you prefer).
2. Place it in the `/public` folder:
   ```
   /public/Francis_Basence_Resume.pdf
   ```
3. If you use a different filename or path, update `src/config.ts`:
   ```typescript
   export const PORTFOLIO_CONFIG = {
     // ...
     resume: {
       fileName: "Your_Custom_Name.pdf",
       filePath: "/Your_Custom_Name.pdf",
     },
   };
   ```
4. The "DOWNLOAD RESUME ↓" button on the hero section and contact section will automatically serve and download this file. If no file is detected yet, an interactive modal automatically opens with a printable QA profile and clear guidance.

---

## ✉️ Updating the Contact Email

All contact references are centralized in `src/config.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  // ...
  contact: {
    email: "francisbasence766@gmail.com", // <-- Update your email here
    subject: "Quality Assurance Opportunity / Collaboration",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },
};
```

Updating this single file automatically updates:
- The top-right "LET'S TALK →" button
- The email copy-to-clipboard button
- The contact form mailto dispatcher
- The modal resume contact information

---

## ✅ Desktop & Mobile Verification Checklist

- [x] **Hero Section**:
  - [x] "HELLO, I'M" in uppercase soft lavender with spaced tracking.
  - [x] "FRANCIS" in crisp white, "BASENCE" in neon purple gradient.
  - [x] "QUALITY ASSURANCE." subtitle in bold uppercase white.
  - [x] Exact intro paragraph with no fabricated statistics or years.
  - [x] Primary "VIEW MY WORK →" button with purple glow and smooth scroll.
  - [x] Secondary "DOWNLOAD RESUME ↓" button with configurable PDF trigger.
  - [x] Right-side "01" vertical indicator with 6 glowing dots.
  - [x] Right-side "FOCUS" panel with "QUALITY", "ACCURACY", "RELIABILITY".
  - [x] Bottom-right angular geometric corner shape with violet glow.
- [x] **Navigation**:
  - [x] Custom geometric "FB" monogram logo.
  - [x] Center links: HOME, ABOUT, SERVICES, EXPERIENCE, PROJECTS, CONTACT.
  - [x] Active link indicator with thin purple underline and glowing centered bead.
  - [x] Top-right "LET'S TALK →" button.
  - [x] Mobile hamburger menu toggle with responsive drawer.
- [x] **Content Sections**:
  - [x] Real section targets for About, Services, Experience, Projects, and Contact.
  - [x] Interactive QA Case Studies with sample defect reports (Steps to Reproduce, Expected vs Actual).
  - [x] Contact section with email copying and direct dispatch.
