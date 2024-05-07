import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context';

function Text() {
    const {searchRecipe,fetchIngrediant} = useGlobalContext();
    const [findRecipe,setfindeRecipe] = useState([]);

    const fetchSearchRecipe = async ()=>{
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchRecipe}&apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setfindeRecipe(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchSearchRecipe();
    },[searchRecipe]);

  return (
    <div className='flex justify-evenly bg-red-200 flex-wrap p-[40px] text-center'>
        {
            findRecipe.length > 0 && (
                findRecipe.map(recipe => {
                    const {id,title,image} = recipe;
                    return (
                        <NavLink key={id} onClick={()=> fetchIngrediant(id)}  to='/recipe' className='relative w-[200px] h-[150px]'>
                            <img className='w-full h-full object-cover rounded-lg' src={image} alt='food'/>
                            <p className='text-white absolute bottom-0 text-center w-full'>{title}</p>
                        </NavLink>
                    )
                })
            )
        }
    </div>
  )
}

export default Text;