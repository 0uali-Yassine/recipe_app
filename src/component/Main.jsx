import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

function Main() {
      const {popular,tranding,fetchIngrediant} = useGlobalContext();

  return (
    <div className="">
        <h1 className='p-[20px] ml-[128px] text-[15px] font-bold text-gray-600'>Our Vegetrian Picks</h1>
        <div className="w-full bg-red-200   p-[20px]">
            <div className='flex justify-center flex-wrap w-[fit-content]   gap-[20px] p-[20px]'>
                  {
                        popular.length > 0 && popular.map(recipe => {
                              const {id,title,image} = recipe;
                              return (
                                    <NavLink key={id} onClick={()=> fetchIngrediant(id)} to='/recipe' className='relative w-[219px] h-[175px]'>
                                          <img className='w-full h-full object-cover rounded-lg' src={image} alt='food'/>
                                          <p className='text-white absolute bottom-0 text-center w-full'>{title}</p>
                                    </NavLink>
                              )
                        }) 
                  }
                   
            </div>
        </div>

        <h1 className='p-[20px] ml-[128px] text-[15px] font-bold text-gray-600'>Tranding</h1>
        <div className='border flex justify-center flex-wrap bg-red-200 gap-[20px] p-[20px]'>
            {
                 tranding.length >0 && tranding.map(trnd => {
                        const {id,title,image} = trnd;
                        return (
                              <NavLink key={id} onClick={()=> fetchIngrediant(id)} to='/recipe' className=' relative w-[136px] h-[211px]'>
                                    <img className='w-full h-full object-cover rounded-lg' src={image} alt='food'/>
                                    <p className='text-white absolute bottom-0 text-center'>{title}</p>
                              </NavLink>
                        )
                  })
            }
                         
        </div>
    </div>
  )
}

export default Main;