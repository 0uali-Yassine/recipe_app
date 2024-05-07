import React, { createContext,useContext,useEffect, useState } from 'react';

const myContext = createContext();

function Context({children}) {
    const [popular,setPopular] = useState([]);
    const [tranding,setTranding] = useState([]);
    const [ingredient,setIngredient] = useState({
        title: "",
        image: "",
        extendedIngredients: [],
      });
      const [nameFilter,setnameFilter] = useState('italian');
      const [filter,setFilter] = useState([]);

      const [searchRecipe,setSearchRecipe] = useState('');
    

   
     
     async  function fetchPopular(){
        try {
          const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet='vegetarian'&apiKey=${process.env.REACT_APP_API_KEY}`);
          const data = await response.json();
          setPopular(data.results);
        
        } catch (error) {
          console.log(error);
        }
      }


      async function fetchRandomRecipe(){
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=7&apiKey=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json();
            setTranding(data.recipes);
            //console.log(data);
        } catch (error) {
            
        }
      }

      async function fetchIngrediant(id){
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setIngredient(data);
            
        } catch (error) {
            console.log(error);
        }
      }
      
      const handlClickFilter = (e)=>{
        setnameFilter(e.currentTarget.querySelector('span').textContent);
      }

        const fetchFilter = async ()=>{
            try {
                const response = await fetch(` https://api.spoonacular.com/recipes/complexSearch?cuisine=${nameFilter}&apiKey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setFilter(data.results);
            } catch (error) {
                console.log(error);
            }
         }


    useEffect(()=>{
        fetchFilter();
    },[nameFilter]);

   
     useEffect(()=>{
        fetchPopular();
       fetchRandomRecipe();
     },[]);





  return (
    <myContext.Provider value={{popular,tranding,fetchIngrediant,ingredient,handlClickFilter,filter,setSearchRecipe,searchRecipe}}>
        {children}
    </myContext.Provider>
  )
}
export const useGlobalContext = ()=>{
    return useContext(myContext);
}

export default Context;