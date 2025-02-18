import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode executa o código duas vezes para aumentar a robustez da aplicação
  <StrictMode>
    <App />
  </StrictMode>,
)
