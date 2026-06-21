import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// HR Recruiter Console Greeting
const showRecruiterEasterEgg = () => {
  const headerBoxStyle = `
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 6px;
    border: 2px solid #60a5fa;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    margin-bottom: 6px;
  `;
  const titleStyle = "font-size: 15px; font-weight: bold; color: #60a5fa; padding: 4px 0;";
  const quoteStyle = "font-size: 13px; font-style: italic; color: #34d399; padding: 4px 0; font-family: Georgia, serif;";
  const textStyle = "font-size: 12px; color: #e2e8f0; line-height: 1.5; padding: 4px 0;";
  const linkStyle = "font-size: 12px; color: #fbbf24; font-weight: bold; padding: 2px 0; text-decoration: underline;";

  console.log("%c⬡ SELVARASAN S | JAVA DEVELOPER ⬡", headerBoxStyle);
  console.log("%c👋 Hello Recruiters, Developers, and Tech Enthusiasts!", titleStyle);
  console.log(
    "%c\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" — Martin Fowler",
    quoteStyle
  );
  console.log(
    "%cI'm Selvarasan, a passionate developer specialized in Java, SQL, React, and building performant, responsive web applications. Hope you're enjoying exploring my portfolio under the hood! 💻✨",
    textStyle
  );
  console.log(
    "%cInterested in collaborating or hiring? Let's connect and build something remarkable together! 🚀",
    "font-size: 12px; font-weight: bold; color: #f87171; padding: 4px 0;"
  );
  console.log("%c💼 LinkedIn: https://linkedin.com/in/selvarasans", linkStyle);
  console.log("%c💻 GitHub:   https://github.com/Selva-rc", linkStyle);
  console.log("%c📧 Email:    selva200513@gmail.com", linkStyle);
};

// Execute recruitment greeting
showRecruiterEasterEgg();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

