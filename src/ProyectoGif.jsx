import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const ProyectoGif = () => {

    //Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales)
//Para evitar el posible error de Javascript por no definir un valor inicial, se le 
//pone un arreglo que tenga 'One Punch' como valor inicial
const [categories, setCategories] = useState(['Snoopy'])

    const onAddCategory=(NewCategory) =>{
        //categoría 3 si se pone antes el nombre va a ir empujando hacia abajo las demas
       //categories.push(NewCategory);
       if (categories.includes(NewCategory)) return; //si se introduce el mismo que ya esta, no se agrega
        setCategories([NewCategory,...categories]) //forma 1: para agregar nuevas categorías a lalista 
       
       //forma 2 setCategories(cat => [...cat,'Categoría 3'])
    }
    return (        
        <> 
        {/* titulooooo */}
            <h1> GifProyect </h1>
        {/* Input */}

            <AddCategory 
            //cuando lleva "on" es que esta emitiendo algo. No es obligatorio pero es común
            onNewCategory = {(value) => onAddCategory(value)}
            />
            {
            categories.map((category)  => (
                 <GifGrid 
                        key={category} 
                        category={categories} />
            ))
                }
        </>
    )
} 