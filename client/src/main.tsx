import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register } from './Auth.tsx'
import VerifyEmail from './pages/VerifyEmail.tsx' 
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/verifyEmail/:token' element={<VerifyEmail />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
