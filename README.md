# Portfolio — Christian

A modern, responsive **IT & Software Developer portfolio** built with **React + Vite**, designed to showcase real-world software development experience, business systems, AI-powered applications, database-driven projects, and mobile development.

The portfolio is designed not only as a personal website, but also as a demonstration of my approach to building practical, user-focused software solutions.

---

## 🚀 Run the Project

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🎨 Portfolio Design

The design is intentionally built around a **modern professional technology aesthetic** rather than a generic developer template.

The visual direction reflects the types of systems I develop:

* Software engineering
* Business information systems
* Database-driven applications
* AI-powered applications
* Web applications
* Mobile applications
* IT systems and technical solutions

### Design principles

* Clean and professional
* Dark-first technology aesthetic
* Responsive across desktop, tablet, and mobile
* Strong visual hierarchy
* Minimal but meaningful animations
* Easy-to-scan project information
* Recruiter-friendly presentation
* Accessible typography and navigation
* Clear separation between professional information and technical details

The homepage provides a concise overview, while detailed project information is presented through dedicated project views.

---

# 🧩 Portfolio Structure

The portfolio includes:

* **Home**
* **About**
* **Skills**
* **Projects**
* **Featured Projects**
* **Experience**
* **Education**
* **Certifications**
* **Services**
* **Resume**
* **Achievements**
* **Testimonials**
* **Contact**
* **AI Chatbot**

Achievements and testimonials remain hidden when there is no real information to display. The portfolio does not use fabricated achievements, clients, or testimonials.

---

# 💻 Development Focus

My development experience and projects cover several areas:

### Web Development

Building responsive web applications and business systems using modern frontend and backend technologies.

### Mobile Development

Developing cross-platform mobile applications with technologies such as React Native and Expo.

### Database Systems

Creating database-driven applications for managing records, users, transactions, and organizational information.

### AI Integration

Integrating AI APIs into applications to provide features such as:

* AI-powered content processing
* AI assistants
* Chatbots
* Document summarization
* Automated workflows
* AI-powered business features

### API Integration

Working with external APIs and services to extend application functionality and connect different systems.

### IT Systems

Developing practical technology solutions involving software systems, databases, operating systems, troubleshooting, and business requirements.

---

# ⭐ Featured Projects

The portfolio is designed to highlight projects based on the actual technologies and systems I have developed.

Examples include:

## AI Resume to Video

An AI-powered web application that transforms resume information into a video presentation.

The application combines:

* React
* Express.js
* Tailwind CSS
* Gemini API
* D-ID API
* Document extraction

The system extracts information from uploaded resume documents, processes and summarizes the content using AI, and sends the resulting information to D-ID to generate a video presentation.

---

## AI-Powered Business Systems

Web-based systems designed to manage client records and organizational information.

Features can include:

* Create, read, update, and delete operations
* Client record management
* File uploads
* Database integration
* AI-powered features
* Chatbot functionality
* Workflow-based systems

These projects demonstrate practical application of software development to real business requirements.

---

## Integrated Healthcare System

A database-driven mobile application designed around healthcare-related workflows.

Potential system features include:

* Medication reminders
* Appointment scheduling
* Medication management
* Pharmacy referrals
* Health analytics
* Medication refill recommendations
* Notifications
* User and administrator roles
* Patient records
* Database integration

The project demonstrates experience combining mobile development, databases, application logic, notifications, and real-world organizational requirements.

---

# 🛠️ Technology Stack

The portfolio and featured projects may use technologies including:

### Frontend

* React
* JavaScript
* TypeScript
* HTML
* CSS
* Tailwind CSS
* Vue
* WordPress

### Backend

* Node.js
* Express.js
* Laravel
* PHP
* REST APIs

### Mobile

* React Native
* Expo

### Databases

* MySQL
* Firebase
* Firestore
* Appwrite

### AI & APIs

* Gemini API
* OpenAI API
* D-ID API
* AI-powered application integration
* Document processing and extraction
* REST API integration

### Cloud & Systems

* AWS
* AWS S3
* Linux
* Windows
* macOS

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

# 📁 Editing Portfolio Content

Almost all portfolio content is centralized in:

```text
src/data/portfolio.js
```

Edit this file to update:

* Name
* Professional title
* Biography
* Skills
* Projects
* Experience
* Education
* Certifications
* Services
* Achievements
* Testimonials
* Social links
* Contact information
* Resume link

Anything marked:

```text
PLACEHOLDER
```

is intended to be replaced with real information.

---

# 🤖 AI Chatbot

The portfolio includes a floating AI chatbot designed to answer questions about my professional background.

The chatbot can provide information about:

* Skills
* Projects
* Experience
* Education
* Technologies
* Services
* Contact information

The chatbot's knowledge base reads from:

```text
src/data/portfolio.js
```

This means portfolio information can be updated in one place.

### Current implementation

The chatbot is currently **client-side and rule-based**.

It does not expose an API key and does not directly call OpenAI or Gemini.

For a future production implementation, the chatbot can be connected to an LLM through a secure backend API.

The API key should never be placed directly inside the React frontend.

---

# 📬 Contact Form

The contact form currently provides:

* Input validation
* Name
* Email
* Subject
* Message
* User feedback
* Email client integration

At the moment, submissions use a `mailto:` workflow.

For a production deployment, this can be replaced with:

* Express.js API
* Serverless API route
* Form service
* Database-backed contact system

---

# 📄 Resume

The Resume section provides a professional summary of:

* Experience
* Technical skills
* Education
* Certifications
* Projects

The resume link is configured through:

```text
personal.resumeUrl
```

in:

```text
src/data/portfolio.js
```

Replace the placeholder URL with the actual PDF before deployment.

---

# 🖼️ Images & Assets

Project images can be added to:

```text
src/assets/
```

and referenced through each project's:

```js
image
```

property.

Recommended project screenshots include:

* Application dashboard
* Mobile application screens
* AI features
* Database interfaces
* Client management interfaces
* Important workflows
* Before/after results where appropriate

A professional project screenshot is preferred over generic stock imagery.

---

# 🌐 SEO & Deployment

The project includes basic SEO configuration.

Before deployment, update:

### `index.html`

* Page title
* Meta description
* Open Graph information

### `public/sitemap.xml`

Replace the placeholder domain with the actual deployed portfolio domain.

### Open Graph image

Add:

```text
public/og-image.png
```

Recommended size:

```text
1200 × 630
```

The image should represent the professional portfolio and personal brand.

---

# 📱 Responsive Design

The portfolio is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Important breakpoints should be tested around:

```text
1920px
1440px
1024px
768px
480px
375px
```

The interface should avoid horizontal scrolling and maintain readable typography on smaller screens.

---

# 🔐 Security

The frontend should never contain private API keys or credentials.

For future AI integrations:

```text
React Frontend
      ↓
Secure Backend/API
      ↓
AI Provider
```

instead of:

```text
React Frontend
      ↓
API Key ❌
      ↓
AI Provider
```

Environment variables and server-side API routes should be used for sensitive credentials.

---

# 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Education
│   ├── Services
│   ├── Resume
│   ├── Contact
│   ├── Chatbot
│   └── Footer
│
├── data/
│   ├── portfolio.js
│   └── chatbotEngine.js
│
├── hooks/
│   └── useTheme.js
│
├── assets/
│
├── index.css
└── App.jsx
```

---

# 🎯 Portfolio Goal

The goal of this portfolio is to present a clear picture of my capabilities as an IT and software developer.

Rather than simply listing technologies, the portfolio focuses on demonstrating how those technologies are used to build practical solutions.

The projects showcase experience with:

**Software Development → Databases → Business Systems → AI → APIs → Web → Mobile → IT Solutions**

The portfolio will continue to evolve as new projects, technologies, certifications, and professional experience are added.
