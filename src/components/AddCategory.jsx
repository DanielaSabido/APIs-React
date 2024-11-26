import { useState } from "react"; 
// Importa el hook `useState` de React, que permite manejar el estado dentro del componente funcional.

export const AddCategory = ({ onNewCategory }) => { 
// Declara el componente funcional `AddCategory`. 
// Recibe como prop la función `onNewCategory`, que se usará para enviar datos al componente padre.

    const [inputValue, setInputValue] = useState(''); 
    // Define un estado local `inputValue` inicializado como una cadena vacía. 
    // Este estado almacenará el texto que el usuario escribe en el campo de entrada.

    const onInputChange = ({ target }) => {
        // Función que se ejecuta cuando el usuario escribe en el campo de entrada.
        setInputValue(target.value); 
        // Actualiza el estado `inputValue` con el nuevo valor ingresado por el usuario.
    };

    const onSubmit = (event) => {
        event.preventDefault(); 
        // Evita el comportamiento por defecto del formulario, que recargaría la página al enviar.

        if (inputValue.trim().length <= 1) return; 
        // Si el texto ingresado tiene menos de dos caracteres (después de eliminar espacios), 
        // no hace nada y detiene la ejecución.s
        setInputValue(''); 
        // Resetea el campo de entrada a una cadena vacía después de enviar.

        onNewCategory(inputValue.trim()); 
        // Llama a la función `onNewCategory` (recibida como prop) con el texto ingresado 
        // después de eliminar espacios extra al inicio y final.
    };

    return (
        <form onSubmit={onSubmit}> 
        {/* Renderiza un formulario que ejecuta `onSubmit` cuando el usuario intenta enviarlo. */}
        
            <input 
            type="text" 
            // Define el campo de entrada como un texto.
            
            placeholder="Buscar Gifs..." 
            // Muestra un texto guía en el campo cuando está vacío.

            onChange={onInputChange} 
            // Asocia el evento `onChange` para que ejecute `onInputChange` 
            // cada vez que el usuario escribe algo.

            />
        </form>
    );
};
