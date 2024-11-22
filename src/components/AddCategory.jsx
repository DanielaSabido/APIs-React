import { useState } from "react"

export const AddCategory = () => {
    const[inputValue,setInputValue]= useState(['One Punch']);
    const onInputChange =( ) =>{
        setInputValue(event.target.value) //para obtener el valor de lo que ingrese el usuario
    }
    const onSubmit = (event) =>{
        
    }
    return(
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange} //llama a la funcion para que se ejecute
            />
        </form>
    )
}

