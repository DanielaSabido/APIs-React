import { GifItem } from './GifItem'; 
// Importa el componente `GifItem`, que se encargará de renderizar cada GIF individualmente.

import { useFetchGifs } from '../hooks/useFetchGifs'; 
// Importa el hook personalizado `useFetchGifs`, que manejará la lógica de obtención de GIFs desde una API.

export const GifGrid = ({ category }) => { 
// Declara el componente funcional `GifGrid`, que recibe una categoría (`category`) como prop. 
// Este componente se encarga de mostrar los GIFs relacionados con esa categoría.

    const { images, isLoading } = useFetchGifs(category); 
    // Desestructura `images` (arreglo de GIFs) e `isLoading` (estado de carga) del hook `useFetchGifs`. 
    // Este hook automáticamente obtiene los datos de la API según la categoría proporcionada.

    return (
        <>
            <h1>{category}</h1> 
            {/* Muestra el nombre de la categoría como título de la sección. */}

            {
                isLoading && (<h2>Cargando...</h2>) 
                // Si `isLoading` es `true`, muestra un mensaje de "Cargando...". 
                // El operador lógico `&&` asegura que el mensaje solo aparece cuando se está cargando.
            }

            <div className='card-grid'> 
            {/* Contenedor con la clase `card-grid` para organizar los GIFs en un diseño de cuadrícula. */}
                {
                    images.map((image) => (
                        <GifItem  
                        // Usa el componente `GifItem` para renderizar cada GIF individual.
                            key={image.id} 
                            // Establece una `key` única basada en el `id` del GIF para ayudar a React a identificar los elementos.
                            {...image} 
                            // Usa el operador de propagación para pasar todas las propiedades de `image` como props al componente `GifItem`.
                        />
                    ))
                }
            </div>
        </>
    );
};
