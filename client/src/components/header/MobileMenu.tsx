import { Category, result, SubCategory } from '../../types/CategoryType'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MobileMenu = ({menuOpen}:{menuOpen:Boolean}) => {
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activesub, setActivesub] = useState<SubCategory[]>([]);
    const result:any = useSelector((state:RootState) => state.Products);
    const {items}:result = result;
    const [subopen,setsubopen] = useState(false);
    function openSubCategories(category:Category){
        setsubopen(true)
        setActiveCategory(category.name);
        setActivesub(category.subcategories)
    }
  return (
    <div className={`fixed ${menuOpen?"translate-x-[0]":"translate-x-[-100%]"} md:hidden  overflow-y-scroll transition-all duration-300 top-[80px] pt-1 w-[80%] text-white  bg-black h-screen `}>
        <div className='space-y-9  pt-8 relative'>
            <div className={`${subopen?"translate-x-0":"translate-x-[100%]"} absolute transition-all cursor-pointer duration-300 inset-0 bg-black z-[5]`}>
                <div onClick={()=>setsubopen(false)} className='flex  cursor-pointer gap-3 items-center px-5 pt-[60px]  border-gray'>
               <HiArrowLeft />
                <button  className='select-none text-gray-400'>{activeCategory}</button>
                </div>
               
                {activesub.map((sub:SubCategory)=><div className='px-5 py-2 select-none cursor-pointer flex items-center justify-between ' key={sub._id}>
                    <p className='py-4'>{sub.name}</p>
                    <div className='flex items-center py-4'><HiArrowRight className='text-white text-2xl'/></div>
                    </div>)}
            </div>
          {items?.categories?.map((category:Category)=>
          <ul key={category._id} onClick={()=>openSubCategories(category)} className={`px-5  ${subopen?"hidden":"flex"}  justify-between`}>
               <p key={category._id}>{category.name}</p>
                <p className='text-xl'><HiArrowRight /></p>
          </ul>
        )}
</div>
        </div>
  )
}

export default MobileMenu