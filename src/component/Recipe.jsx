import { useState } from "react";
import { useGlobalContext } from "../Context";


function Recipe() {
  const [isInstrection,setIsInstrection] = useState(true);
  const {ingredient} = useGlobalContext();
  const {title,image,extendedIngredients} = ingredient;
  return (
    <div className='recipe flex justify-evenly border w-[90%] m-auto p-[20px]'>
      <div className="flex flex-col gap-[10px]">
        <h1 className='text-gray-600 text-[16px] font-bold'>{title}</h1>
        <div className='w-[240px] h-[150px] border'>
          <img src={image} className="w-full h-full object-cover" alt="food" />
        </div>
      </div>

      <div className="instrection flex flex-col gap-[10px] w-[40%] mt-[10px]">
        <div className="flex gap-[20px]">
          <button onClick={()=> setIsInstrection(true)} className={`border border-gray-600 ${isInstrection ? 'bg-gray-600 text-white':'bg-white text-gray-600'} text-[13px] hover:bg-gray-300 hover:text-gray-600 px-[10px] py-[5px]`}>Instrection</button>
          <button onClick={()=> setIsInstrection(false)}  className={`border border-gray-600 ${!isInstrection ? 'bg-gray-600 text-white':'bg-white text-gray-600'} text-[13px] hover:bg-gray-300 hover:text-gray-600 px-[10px] py-[5px]`}>Ingerdient</button>
        </div>
        {
          isInstrection ? (
              <>
                <p className="mt-[20px] text-gary-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis quis, in quisquam eius debitis! Molestiae unde illum sed ipsum, ducimus explicabo debitis odio fugit, recusandae voluptatem excepturi voluptatibus itaque.</p>
                <ul className="text-gray-500 text-[13px] font-medium">
                  <li>1.efuef efu'f gh"'g' ghh"'g'ef</li>
                  <li>2.efuef efu'f gh"'g' ghh"'g'ef</li>
                  <li>3.efuef efu'f gh"'g' ghh"'g'ef</li>
                </ul>
              </>
          ) : (
            <ul className="text-gray-500 text-[13px] font-medium mt-[20px]">
              {
                extendedIngredients.map((ingr,key)=>{
                  const {aisle} = ingr;
                  return (
                    <li key={key}>.{aisle}</li>
                  )
                })
              }
              
            </ul>
          )
        }
      </div>
    
    </div>
  )
}

export default Recipe;