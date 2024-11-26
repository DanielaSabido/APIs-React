import React from "react"; 
// Importa React, que es necesario para poder crear componentes en JSX.

export const GifItem = ({ title, url, id }) => { 
// Declara el componente funcional `GifItem`, que recibe tres props:
// - `title`: El título del GIF.
// - `url`: La URL de la imagen del GIF.
// - `id`: El ID único del GIF (aunque no se usa directamente aquí, puede ser útil para la clave en listas de elementos).

    return(
        <div className="card"> 
        {/* Un contenedor `div` con la clase `card`, que probablemente será estilizado para que se vea como una tarjeta visualmente atractiva. */}
            <img src={url} alt={title} /> 
            {/* Muestra la imagen del GIF usando la URL proporcionada. 
            - `src={url}`: Establece la fuente de la imagen con la URL del GIF.
            - `alt={title}`: El atributo `alt` es importante para la accesibilidad y describe la imagen con el título del GIF. */}
            
            <p>{title}</p> 
            {/* Muestra el título del GIF en un párrafo debajo de la imagen. */}
        </div>
    );
};
