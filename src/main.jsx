import { StrictMode } from 'react'; 
// Importa el componente `StrictMode` de React. 
// `StrictMode` ayuda a identificar problemas potenciales en la aplicación 
// al ejecutar comprobaciones adicionales en el desarrollo (no afecta en producción).

import { createRoot } from 'react-dom/client'; 
// Importa `createRoot` de la librería React DOM, que es la forma moderna 
// de inicializar aplicaciones React con soporte para la API concurrente.

import './style.css'; 
// Importa el archivo `style.css`, que contiene los estilos personalizados de la aplicación. 
// Esto permite aplicar las clases y estilos CSS definidos.

import { ProyectoGif } from './ProyectoGif'; 
// Importa el componente principal `ProyectoGif` desde el archivo `ProyectoGif`. 
// Este será el punto de inicio de la interfaz de usuario.

createRoot(document.getElementById('root')).render(
  // Usa `createRoot` para inicializar React y enlazarlo al elemento con id 'root' en el archivo HTML. 
  // Este es el contenedor principal donde se renderiza la aplicación.

  <StrictMode>
    {/* Envolvemos el componente principal en `StrictMode` para habilitar sus características 
    de depuración y asegurarnos de que seguimos las mejores prácticas de React. */}
    <ProyectoGif /> 
    {/* Renderiza el componente principal de la aplicación, que contiene toda la lógica y 
    los subcomponentes necesarios. */}
  </StrictMode>,
);
