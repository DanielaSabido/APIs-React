import { useState } from "react"; 
// Importamos el hook useState de React, que permite manejar el estado en componentes funcionales.

import { AddCategory, GifGrid } from "./components"; 
// Importamos dos componentes: AddCategory (para añadir categorías) y GifGrid (para mostrar los gifs de una categoría).

export const ProyectoGif = () => { 
// Declaramos el componente funcional principal llamado ProyectoGif.

    // Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales).
    // Para evitar errores, se inicializa el estado 'categories' con un arreglo que contiene 'Snoopy' como valor inicial.
    const [categories, setCategories] = useState(['Snoopy']); 

    // Función que se ejecutará para añadir una nueva categoría al estado.
    const onAddCategory = (newCategory) => {
        // Si la categoría ya existe en el arreglo, no hace nada y se sale de la función.
        if (categories.includes(newCategory)) return; 
        
        // Actualiza el estado agregando la nueva categoría al inicio del arreglo.
        setCategories([newCategory, ...categories]); 
        
        // Alternativa para agregar una nueva categoría al final del arreglo:
        // setCategories(cat => [...cat, 'Categoría 3']);
    };

    return (        
        <> 
        {/* Fragmento React (etiqueta vacía) que permite agrupar varios elementos sin agregar un nodo extra al DOM. */}
        
        {/* Título principal del proyecto */}
        <h2> Giphy Proyect </h2> 

        {/* Componente de entrada para agregar nuevas categorías */}
        <AddCategory 
            // Propiedad personalizada 'onNewCategory' que envía el valor ingresado en el componente hijo.
            // Se pasa una función que llama a 'onAddCategory' con el valor recibido.
            onNewCategory={(value) => onAddCategory(value)} 
        />

        {/* Mapeo de las categorías para renderizar un componente GifGrid por cada una */}
        {categories.map((category) => (
            <GifGrid 
                key={category} // Se usa 'key' para que React identifique cada elemento único.
                category={category} // Propiedad que se envía al componente GifGrid para procesar la categoría.
            />
        ))}
        </>
    );
};
