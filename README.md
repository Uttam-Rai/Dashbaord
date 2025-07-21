# 📊 Dashboard App – Fullstack (Vite + Express + TypeScript)

A fullstack dashboard web application built using:

- Vite (Frontend)
- TypeScript (Frontend + Backend)
- TailwindCSS (Styling)
- Express.js (Backend API)
- In-Memory Storage (Mock DB)
- Deploy-ready (Render or Vercel + Render)

---

🔗 Live Demo:  
https://dashbaord-h5w8.onrender.com

---

📁 Project Structure:

.
├── client/             # Frontend (Vite + TypeScript + TailwindCSS)
│   ├── index.html
│   └── src/
├── server/             # Backend (Express + TypeScript)
│   ├── index.ts
│   └── storage.ts      # In-memory mock database
├── shared/             # Shared types/interfaces
├── package.json
├── tsconfig.json
└── README.md

---

🧪 Features:

- Dashboard UI
- Backend API for users
- In-memory storage with auto-incremented user IDs
- Full TypeScript project
- Runs on local dev or deploys easily to Render

---

🚀 Getting Started Locally:

1. Clone the repo:

   git clone https://github.com/your-username/dashboard-app.git
   cd dashboard-app

2. Install dependencies:

   npm install

3. Start backend:

   npm run dev:server

   → Runs on http://localhost:3000

4. Start frontend:

   cd client
   npm install
   npm run dev

   → Runs on http://localhost:5173

---

📦 Useful Scripts:

- npm run dev:server → Start backend (Express)
- npm run dev       → Start frontend (Vite)
- npm run build     → Build frontend
- npm start         → Run backend in production

---

⚠️ Notes:

- Uses a temporary in-memory database (`Map`), so all data is reset on server restart.
- Ideal for mock testing and UI development.
- To go production-ready, replace storage.ts with a real DB integration.

---

📡 Deployment Instructions:

→ Backend (Render):
- Go to https://render.com
- New Web Service → Connect GitHub
- Build command: npm install && npm run build
- Start command: npm start
- Root directory: server

→ Frontend (Vercel):
- Go to https://vercel.com
- Import the client folder as a new project
- Framework: Vite
- Build command: npm run build
- Output directory: dist

---

🙋‍♂️ Author:

Made with ❤️ by [Your Name](https://github.com/your-username)

License: MIT
