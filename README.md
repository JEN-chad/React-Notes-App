# 📝 Noto - A Minimal Notes App

A clean, fast, and responsive note-taking web app built using **React**, **Vite**, and **Tailwind CSS**.

> This project uses Vite for lightning-fast development and React for UI rendering. Styled with Tailwind CSS and follows best practices with ESLint.

---

## 🚀 Features

- 🧠 Add, pin, archive, and delete notes  
- 🎨 Beautiful UI with Tailwind CSS  
- ⚡ Lightning-fast development using Vite  
- 🔁 Hot Module Replacement (HMR)  
- ♻️ State management using `useReducer`  
- 🔍 Clean code with ESLint support  

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [UUID](https://www.npmjs.com/package/uuid)  
- [ESLint](https://eslint.org/)  
- [Material Symbols](https://fonts.google.com/icons)  

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/noto-notesapp.git
cd noto-notesapp

```

### 2.  Install dependencies

```bash
npm install
```
### 3. Development 

 To start the development server:
```bash

npm run dev
```
### 4.  Project Structure

```bash
noto-notesapp/
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components (e.g., NotesCard, Sidebar)
│   ├── context/             # Context API for state management
│   ├── pages/               # Different views (Home, Archive, Bin)
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind & global styles
├── .eslintrc.cjs            # ESLint config
├── tailwind.config.cjs      # Tailwind config
├── vite.config.js           # Vite config
└── package.json             # Project metadata

```
### 5. 🌐 Deployment
You can deploy this app using Netlify, Vercel, or GitHub Pages.

Deploy to Netlify:
Push your repository to GitHub

Go to Netlify and connect your GitHub repo

Set the build command to:

```bash
npm run build
```
### 6. Set the publish directory to:
```bash
dist
```
### 7. ToDo
 1.Add dark mode

 2.Add tags/categories for notes

 3.Sync notes with cloud storage (e.g., Firebase)
