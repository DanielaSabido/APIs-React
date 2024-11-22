import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const Gif = () => {

    //Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales)
//Para evitar el posible error de Javascript por no definir un valor inicial, se le 
//pone un arreglo que tenga 'One Punch' como valor inicial
const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory=() =>{
        //categoría 3 si se pone antes el nombre va a ir empujando hacia abajo las demas
       setCategories([...categories,'Categoria 3']) //forma 1: para agregar nuevas categorías a lalista 
       
       //forma 2 setCategories(cat => [...cat,'Categoría 3'])
    }
    return (        
        <> 
        {/* titulooooo */}
            <h1> Gif </h1>
        {/* Input */}

            <AddCategory />


        {/* Listado de Gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map(category=>{
                return <li key={ category }>{category}</li>
            })}
            {/* <li>Categoría 1</li> listas que se pondram */}

        </ol>
            {/* Gif Items */}
        </>
    )
} 