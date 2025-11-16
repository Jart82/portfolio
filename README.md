# 🧑‍💻 My Portfolio

A lightweight, responsive personal portfolio built with **Angular** to showcase my projects, skills, and contact information. Designed as a clean, mobile-first single-page application (SPA), it reflects my attention to user experience, maintainable architecture, and modern web practices.

---

## ✨ Features

- **Fully responsive layout** (mobile-first) using SCSS
- Modular component structure:  
  `Home` | `About` | `Projects` | `Skills` | `Navbar` | `Footer`
- Reusable `Project` model with templated entries for easy content management
- Optimized for performance and readability

---

## 🛠️ Tech Stack

- **Framework**: Angular (v20+)
- **Language**: TypeScript
- **Styling**: SCSS (component-scoped + global styles)
- **Tooling**: Node.js, npm, Angular CLI

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended, or current LTS)
- npm (included with Node.js)
- *(Optional)* Angular CLI (`npm install -g @angular/cli`)

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start
# or: ng serve
```

Open your browser to **http://localhost:4200**. Changes are hot-reloaded automatically.

> 💡 **Troubleshooting**: If you encounter peer dependency conflicts during install, try:  
> ```bash
> npm install --legacy-peer-deps
> ```

---

## 🏗️ Project Structure (Key Files)

```
src/
├── app/
│   ├── components/          # All page & UI components
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/        # Project listing + detail logic
│   │   ├── skills/
│   │   ├── navbar/
│   │   └── footer/
│   └── model/
│       └── project.interface.ts  # Strongly typed project data
├── styles.scss              # Global styles
├── index.html               # App entry point
└── main.ts                  # Bootstrapping
```

Top-level config:
- `angular.json` – Workspace settings
- `package.json` – Scripts & dependencies

---

## 🎨 Styling Notes

- Uses **SCSS** for modular, maintainable styles.
- If content appears too narrow on desktop, check for `max-width` constraints in component SCSS files (e.g., `skills.component.scss`).

---

## 🧪 Testing

Run unit tests:
```bash
npm test
# or: ng test
```

> End-to-end (e2e) tests are not configured by default but can be added via Cypress or Playwright.

---

## 📦 Build for Production

```bash
npm run build
# or: ng build
```

Outputs an optimized bundle to the `dist/` folder, ready for deployment.

---

## 🤝 Contributions

Improvements are welcome! Please:
1. Open an issue to discuss proposed changes
2. Submit a focused pull request with clear descriptions
3. Include tests if applicable

---

## 📄 License

This project is **unlicensed by default**. To use or redistribute, please add an explicit license (e.g., MIT or Apache-2.0) by including a `LICENSE` file.

---

## 📬 Author

Built by **Jart82**  
*(If you're Jeremiah and this is your portfolio, consider updating this line to reflect your name!)*

> 🔜 **Want more?** I can add:
> - Badges (build status, license, Angular version)
> - Live demo link (e.g., Vercel, Netlify, GitHub Pages)
> - Screenshots or Lighthouse scores
> - Deployment guide  
> Just let me know your preference!

---

## 📘 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Style Guide](https://angular.io/guide/styleguide)

---

