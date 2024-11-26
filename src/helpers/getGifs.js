export const getGifs = async (category) => { 
    // Declara una función asíncrona llamada `getGifs` que recibe una categoría (`category`) como argumento. 
    // Esta función se encarga de obtener GIFs relacionados con la categoría desde la API de Giphy.
    
        const url = `https://api.giphy.com/v1/gifs/search?api_key=ZSy7p5BN8cioONULlCGXkXJxNUA557xi&q=${category}&limit=10`;
        // Construye la URL para realizar la solicitud a la API de Giphy. 
        // La URL incluye:
        // - `api_key`: Tu clave de API para autenticar la solicitud.
        // - `q=${category}`: El término de búsqueda que define la categoría.
        // - `limit=10`: Limita el número de resultados a 10.
    
        const resp = await fetch(url); 
        // Realiza una solicitud HTTP a la URL especificada utilizando `fetch` y espera la respuesta.
    
        const { data } = await resp.json(); 
        // Convierte la respuesta en formato JSON y desestructura el campo `data`, que contiene los datos de los GIFs.
    
        const gifs = data.map(img => ({ 
        // Usa el método `map` para transformar cada objeto de `data` en un nuevo objeto con los campos que necesitas.
            id: img.id, 
            // Obtiene el ID único del GIF.
            title: img.title, 
            // Obtiene el título del GIF.
            url: img.images.downsized_medium.url 
            // Obtiene la URL de la versión optimizada del GIF.
        }));
    
        console.log(gifs); 
        // Imprime en consola el arreglo de GIFs transformados para propósitos de depuración.
    
        return gifs; 
        // Retorna el arreglo de GIFs procesados al lugar desde donde se llamó esta función.
    };
    