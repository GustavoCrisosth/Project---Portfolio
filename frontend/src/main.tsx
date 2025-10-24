import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. ADICIONE AQUI */}
      <App />
    </BrowserRouter> {/* 3. ADICIONE AQUI */}
  </React.StrictMode>,
)