import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Gif } from './Gif'
import './style.css'; //para importar la clase de css

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gif />
  </StrictMode>,
);
