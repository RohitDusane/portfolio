# React + Vite

# Portfolio Website

This is a personal portfolio website built using **React**. It showcases my certifications, projects, and skills.

---

## 🚀 Features

- Responsive layout with React and Tailwind CSS
- Animated components using Framer Motion
- Deployed via GitHub Pages
- Certifications dynamically rendered from data

---

## 📦 Tech Stack

- React
- Tailwind CSS
- Framer Motion
- GitHub Pages for deployment

---

## 📁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev    # For Vite
####  or
npm start      # For Create React App
```

#### Then open your browser and go to:

```bash
http://localhost:5173/  # (Vite)
http://localhost:3000/  # (CRA)
```

### 4.🚀 Deployment (GitHub Pages)
```bash
npm run build
npm run deploy
```

#### Make sure your `package.json` has the correct homepage and deploy scripts:
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

### 5.📝 License
This project is open source and free to use.