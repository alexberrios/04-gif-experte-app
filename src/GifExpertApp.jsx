import { useState } from "react";

import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'HunterXHunter']);
    }
    console.log(categories);
  return (
    <>
     <h1>Gif Experte App</h1> 

      <AddCategory />
      <button onClick={onAddCategory}>Agregar</button>

     <ol>
          {
              categories.map(category => {
                  return <li key={category}>{category}</li>
              })
          }
     </ol>
    </>
  )
}

