import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginPage } from './LoginPage'

import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
