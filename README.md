# 📝 Noto - A Minimal Notes App

A clean, fast, and responsive note-taking web app built using **React**, **Vite**, and **Tailwind CSS**.

> This project uses Vite for lightning-fast development and React for UI rendering. Styled with Tailwind CSS and follows best practices with ESLint.

## 🚀 Features

- 🧠 Add, pin, archive, and delete notes
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Lightning-fast development using Vite
- 🔁 Hot Module Replacement (HMR)
- ♻️ State management using `useReducer`
- 🔍 Clean code with ESLint support

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [ESLint](https://eslint.org/)
- [Material Symbols](https://fonts.google.com/icons)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/noto-notesapp.git
cd noto-notesapp

# Install dependencies
npm install

# Start the development server
npm run dev

 Project Structure

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
Deployment
Deploy using Netlify, Vercel, or GitHub Pages. For Netlify:

Push your repo to GitHub

Connect your repo to Netlify

Set build command as npm run build

Set publish directory as dist/

✅ To Do
 Add dark mode

 Add tags/categories for notes

 Sync with cloud (e.g., Firebase)
