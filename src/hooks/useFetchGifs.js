import { useEffect, useState } from "react"; 
// Importa los hooks `useEffect` y `useState` desde React. 
// `useState` permite manejar el estado en el hook personalizado, 
// y `useEffect` ejecuta efectos secundarios, como llamadas a APIs.

import { getGifs } from '../helpers/getGifs'; 
// Importa la función `getGifs` desde el archivo de helpers. 
// Esta función se encargará de obtener los GIFs desde un API en base a la categoría proporcionada.

export const useFetchGifs = (category) => { 
// Define un hook personalizado llamado `useFetchGifs`. 
// Recibe como argumento una categoría (`category`) para buscar GIFs relacionados.

    const [images, setImages] = useState([]); 
    // Declara el estado `images` para almacenar las imágenes obtenidas. 
    // Su estado inicial es un arreglo vacío.

    const [isLoading, setIsLoading] = useState(true); 
    // Declara el estado `isLoading` para indicar si los datos aún están cargándose. 
    // Inicialmente, su valor es `true` (la carga está en progreso).

    const getImages = async () => { 
    // Define una función asíncrona `getImages` para obtener los GIFs de la API.
        const newImages = await getGifs(category); 
        // Llama a la función `getGifs` pasando la categoría y espera a que se resuelva con los datos de los GIFs.
        setImages(newImages); 
        // Actualiza el estado `images` con el arreglo de nuevas imágenes obtenidas.
        setIsLoading(false); 
        // Cambia `isLoading` a `false` porque los datos ya han sido cargados.
    };

    useEffect(() => { 
    // Usa el hook `useEffect` para ejecutar un efecto secundario (obtener imágenes) 
    // después de que el componente que usa este hook se monte por primera vez.
        getImages(); 
        // Llama a la función `getImages` para iniciar la carga de datos.
    }, []); 
    // El arreglo vacío indica que este efecto solo se ejecutará una vez, 
    // cuando el componente se monte.

    return {
        images, 
        // Retorna el estado `images`, que contiene el arreglo de GIFs obtenidos.
        isLoading 
        // Retorna el estado `isLoading`, que indica si la carga está en progreso.
    };
};
