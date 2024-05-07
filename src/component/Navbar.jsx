import { IoSearchSharp } from "react-icons/io5";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { GiChopsticks } from "react-icons/gi";
import { NavLink} from "react-router-dom";
import { useState,useRef} from "react";
import { useGlobalContext } from "../Context";

function Navbar() {
  const {handlClickFilter,setSearchRecipe} = useGlobalContext();
  const [search,setSearch] = useState('');
  const inputRecipe = useRef();

  const handelForm = (e)=>{
    e.preventDefault();
    setSearchRecipe(inputRecipe.current.value);
    window.location.href = '/search'
  }

 
  return (
   <div>
        <nav className='p-[20px]'>
          <div className='w-[100px] bg-gray-800 text-white'>Logo</div>
        </nav>
        <form onSubmit={handelForm} className='bg-gray-600 w-[205px] m-auto flex items-center rounded-md'>
            <IoSearchSharp size={16}className='text-white mr-[4px]'/>
            <input ref={inputRecipe} onChange={(e)=> setSearch(e.target.value) } value={search} type='text' className='text-white outline-none text-[14px] bg-slate-600 p-[2px]' placeholder='Cokiese'/>
        </form>
        <div className='text-black  p-[10px] flex justify-center gap-[10px]'>
            <NavLink onClick={handlClickFilter} to='/filter' className='flex flex-col items-center cursor-pointer w-[50px] p-[5px] rounded-[50%] bg-gray-600  hover:bg-gray-500 text-white'>
              <FaPizzaSlice/>
              <span   className='text-[13px]'>Italian</span>
            </NavLink>
            <NavLink onClick={handlClickFilter} to='/filter' className='flex flex-col items-center cursor-pointer w-[50px] p-[5px] rounded-[50%] bg-gray-600 hover:bg-gray-500 text-white'>
              <GiHamburger/>
              <span  className='text-[12px]'>American</span>
            </NavLink>
            <NavLink onClick={handlClickFilter} to='/filter' className='flex flex-col items-center cursor-pointer w-[50px] p-[5px] rounded-[50%] bg-gray-600 hover:bg-gray-500 text-white'>
              <LuSoup/>
              <span  className='text-[13px]'>Thai</span>
            </NavLink>
            <NavLink onClick={handlClickFilter} to='/filter' className='flex flex-col items-center cursor-pointer w-[50px] p-[5px] rounded-[50%] bg-gray-600 hover:bg-gray-500 text-white'>
              <GiChopsticks/>
              <span  className='text-[13px]'>Japanese</span>
            </NavLink>
        </div>
   </div>
  )
}

export default Navbar;