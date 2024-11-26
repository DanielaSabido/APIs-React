import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'; //para importar la clase de css
import { ProyectoGif } from './ProyectoGif';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProyectoGif />
  </StrictMode>,
);
