# Soe Wunna — Developer Portfolio

A responsive, accessible, and lightweight personal portfolio website built with modern vanilla web technologies (**HTML5**, **CSS3**, and **JavaScript ES6+**). Designed to showcase software engineering projects, backend stack capabilities, and DevOps proficiencies with zero external framework dependencies.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Accessibility & Best Practices](#accessibility--best-practices)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Projects Featured](#projects-featured)
- [Contact & Links](#contact--links)
- [License](#license)

---

## 🚀 Overview

This repository contains the complete source code for **Soe Wunna's** personal developer portfolio. As a software engineering student at **Tampere University of Applied Sciences (TAMK)** specializing in backend engineering and DevOps, this site serves as a live demonstration of core web fundamentals, clean architecture, and user-centric design.

### Highlights:
- **Zero build steps or third-party dependencies**: Pure native HTML, CSS, and vanilla JS.
- **Mobile-first & responsive**: Smoothly adapts from small mobile viewports to large desktop monitors.
- **Light / Dark theme**: Seamless color-scheme switching with persistent preference storage.
- **High accessibility standard**: Keyboard-navigable, screen-reader friendly with proper ARIA semantics.

---

## ✨ Key Features

### 1. 🌓 Light & Dark Theme Toggle
- Powered by CSS custom properties (design tokens) on `:root` and `[data-theme="dark"]`.
- Persists user preference across page visits using `localStorage` with `try...catch` fallback for restricted browsing environments.
- Accessible toggle button updating `aria-pressed` dynamically.

### 2. 📱 Responsive Navigation & Mobile Menu
- Clean desktop header with smooth jump links to page sections (`#about`, `#skills`, `#projects`, `#contact`).
- Fully accessible mobile hamburger drawer with `aria-expanded` and `aria-controls`.
- Closes automatically when:
  - A navigation link is clicked.
  - The <kbd>Escape</kbd> key is pressed (returns focus to toggle button).
  - The viewport is resized across the desktop media query breakpoint (`768px`).

### 3. 🎯 Dynamic Project Showcase & Category Filtering
- Dynamic project card generation from a structured data model in JavaScript.
- Category filter buttons ("All", "Websites", "Web application", "Application", "Backend") generated dynamically.
- Live results count announced via `aria-live="polite"` for assistive technology.
- Visual and ARIA active state management (`aria-pressed`).

### 4. 📝 Interactive Contact Form with Client-Side Validation
- Real-time character count tracker (`0 / 500`) for the message textarea.
- Form field validation:
  - **Name**: Minimum length check (>= 2 characters).
  - **Email**: Standard regex email pattern matching.
  - **Message**: Length boundaries (between 20 and 500 characters).
- Live validation error clearing on valid user input.
- Accessible error announcements with `aria-describedby` and `aria-invalid`.
- Automatic focus shift to the first invalid field on submission attempt.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), SEO metadata, and ARIA roles |
| **CSS3** | Modern styling, CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, media queries, and smooth scroll behavior |
| **JavaScript (ES6+)** | Dynamic DOM rendering, event listeners, form validation logic, filter state management, and `localStorage` integration |

---

## 📁 Project Structure

```text
portfolio/
├── css/
│   └── style.css       # Design tokens, resets, component styles, and dark theme
├── js/
│   └── main.js         # Mobile menu, theme switcher, project filter, and form validation
├── index.html          # Semantic HTML document structure and metadata
└── README.md           # Project documentation and setup guide
```

---

## ♿ Accessibility & Best Practices

- **Semantic HTML**: Page content is organized into logical regions and semantic landmark elements.
- **Keyboard Navigation**: All interactive elements (buttons, links, inputs) are fully focusable and usable via keyboard.
- **Focus Management**: Visible focus rings styled with `:focus-visible` for keyboard users without distracting mouse users.
- **Reduced Motion Support**: Respects users' operating system preferences via `@media (prefers-reduced-motion: no-preference)` for smooth scrolling.
- **Accessible State Updates**: Uses ARIA live regions (`aria-live="polite"`), `aria-expanded`, and `aria-pressed` for screen reader announcements.

---

## 💻 Getting Started

### Prerequisites

No build tools, bundlers, or package managers (such as npm, webpack, or Vite) are required. All you need is a modern web browser.

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Soe-Wunna/portfolio.git
   cd portfolio
   ```

2. **Open the project:**
   - **Option A (Direct):** Double-click `index.html` or open it directly in any browser (Chrome, Firefox, Safari, Edge).
   - **Option B (VS Code Live Server):** Right-click `index.html` in VS Code and select **Open with Live Server**.
   - **Option C (Python local server):**
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - **Option D (Node.js serve):**
     ```bash
     npx serve .
     ```

---

## 📂 Projects Featured

1. **Personal Portfolio** — This website; built with plain HTML, CSS, and JavaScript.
2. **Music Player** — An interactive web audio player built with vanilla web technologies.
3. **Shopping List** — Lightweight grocery & shopping list organizer application.
4. **E-commerce Platform** — RESTful backend service built with Node.js, Express.js, and MongoDB.

---

## 👤 Contact & Links

- **Author**: Soe Wunna
- **Studies**: Software Engineering student at Tampere University of Applied Sciences (TAMK)
- **Email**: [soewunna99laptop@gmail.com](mailto:soewunna99laptop@gmail.com)
- **GitHub**: [@Soe-Wunna](https://github.com/Soe-Wunna)
- **LinkedIn**: [Soe Wunna](https://www.linkedin.com/in/soe-wunna-ba8848398/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
