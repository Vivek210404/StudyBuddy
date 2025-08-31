# 📚 StudyBuddy - AI Powered Roadmap Generator

StudyBuddy is an **AI-powered web app** that generates **step-by-step learning roadmaps** for any topic you provide.  
It uses **Google Gemini API** to create structured roadmaps and then formats them into a clean, easy-to-follow layout.

---

## ✨ Features
- 🔹 Enter any topic (e.g. "Web Development", "Machine Learning", "Data Structures")  
- 🔹 AI (Gemini) generates a **complete roadmap level-wise**  
- 🔹 Roadmap is **parsed and displayed** in a proper structured format  
- 🔹 Responsive UI for desktop & mobile  
- 🔹 Built with Vite + React + TypeScript for speed  

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite  
- **Styling:** TailwindCSS (or your chosen CSS framework)  
- **AI Integration:** Google Gemini API  
- **Package Manager:** npm  

---

## 🚀 Getting Started (Run Locally)

Follow these steps to set up **StudyBuddy** on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Vivek210404/StudyBuddy.git
cd StudyBuddy

### 2️⃣ Install Dependencies
npm install

3️⃣ Add Gemini API Key

Create a .env file in the root and add your Google Gemini API Key:
VITE_GEMINI_API_KEY=your_api_key_here

4️⃣ Run the Development Server
npm run dev

Now open your browser and navigate to:

http://localhost:5173

5️⃣ Build for Production
npm run build

This will generate a production-ready build in the dist/ folder.

6️⃣ Preview Production Build (Optional)
npm run preview


🌐 Deployment

This app is configured for deployment on Render / Vercel / Netlify.

Build Command:

npm install && npm run build


Publish Directory:

dist