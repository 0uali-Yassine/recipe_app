import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

function Filterrecipes() {
    const {filter,fetchIngrediant} = useGlobalContext();
  return (
    <div className='min-w-[210px] max-w-[900px] m-auto grid gap-y-[20px] grid-cols-[repeat(auto-fit,210px)] justify-center'>
        
        {
            filter.length > 0 && filter.map(fltr => {
                const {id,title,image} = fltr;
                return (
                    <NavLink key={id} onClick={()=> fetchIngrediant(id)}  to='/recipe' className="w-[200px] h-[160px] cursor-pointer">
                        <img src={image} className="w-[200px] h-[150px] rounded-lg" alt="food" />
                        <p className="text-center text-gray-700 font-medium">{title}</p>
                    </NavLink>
                )
            }) 

        }
    </div>
  )
}

export default Filterrecipes;