import { clothingCategories } from '../products/products'
import { Category, SubCategory } from '../../types/CategoryType'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { useState } from 'react';

const MobileMenu = ({menuOpen}:{menuOpen:Boolean}) => {
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activesub, setActivesub] = useState<SubCategory[]>([]);

    const [subopen,setsubopen] = useState(false);
    function openSubCategories(category:Category){
        setsubopen(true)
        setActiveCategory(category.name);
        setActivesub(category.subCategories)
    }
  return (
    <div className={`fixed ${menuOpen?"translate-x-[0]":"translate-x-[-100%]"} md:hidden  overflow-hidden transition-all duration-300 top-[80px] pt-1 w-[80%] text-white  bg-black h-screen `}>
        <div className='space-y-9 relative'>
            <div className={`${subopen?"translate-x-0":"translate-x-[100%]"} absolute transition-all duration-300 inset-0 bg-black z-[5]`}>
                <div onClick={()=>setsubopen(false)} className='flex  gap-3 items-center px-5 pb-5  border-gray'>
               <HiArrowLeft />
                <button  className=' text-gray-400'>{activeCategory}</button>
                </div>
               
                {activesub.map((sub:SubCategory)=><div className='px-5 py-2 cursor-pointer flex items-center justify-between ' key={sub.id}>
                    <p className='py-4'>{sub.name}</p>
                    <div className='flex items-center py-4'><HiArrowRight className='text-white text-2xl'/></div>
                    </div>)}
            </div>
          {clothingCategories.map((category:Category)=>
          <ul key={category.id} onClick={()=>openSubCategories(category)} className={`px-5 ${subopen?"hidden":"flex"}  justify-between`}>
               <p key={category.id}>{category.name}</p>
                <p className='text-xl'><HiArrowRight /></p>
          </ul>
        )}
</div>
        </div>
  )
}

export default MobileMenu