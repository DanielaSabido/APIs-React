import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const[inputValue,setInputValue]= useState(['Snoopy']);
    

    const onInputChange =( ) =>{
        setInputValue(event.target.value) //para obtener el valor de lo que ingrese el usuario
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue,...categories])
        setInputValue('');
        onNewCategory(inputValue.trim())

    }
    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            onChange={onInputChange} //llama a la funcion para que se ejecute
            />
        </form>
    )
}

