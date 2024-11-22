import { Category, SubCategory } from '../../types/CategoryType';
import { clothingCategories } from '../products/products';
import { GoSearch } from "react-icons/go";
import { HiArrowRight, HiOutlineUser } from "react-icons/hi2";
import styles from './header.module.css'
import { RxCaretDown,RxCaretUp } from "react-icons/rx";
import { CgShoppingBag } from "react-icons/cg";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { useState } from 'react';
import MobileMenu from './MobileMenu';
type showType = {
    clicked:boolean,
    id:number
}
const Header:React.FC = () => {
  const [show, setShow] = useState<showType>({clicked:false,id:1});
  const [menuOpen,setmenuOpen] = useState(false);
  const [subCategories,setSubCategories] = useState<SubCategory[]>([]);
  function showsubcategories(sub:SubCategory[],id:number){
    setShow((prev)=>({id:id,clicked:!prev.clicked}))
      setSubCategories(sub);
      console.log(show);
  }
  return (
    <div className="bg-black sticky top-0 z-[100] w-full flex items-center text-white h-[80px] ">
      {/* Mobile Menu */}
       <MobileMenu menuOpen={menuOpen} />
     <div className="flex items-center p-2 z-[10] justify-between w-full">
      {/* Hamburger */}
        <div onClick={()=>setmenuOpen(!menuOpen)} className="space-y-1 cursor-pointer ml-1 block md:hidden">
          <div className={`h-[2px] ${menuOpen&&"-translate-y-[2px] rotate-[45deg]"} transition-all duration-300 bg-white w-[20px]`}></div>
          <div className={`h-[2px] ${menuOpen && "-translate-y-2   rotate-[-45deg]"} transition-all duration-300 bg-white w-[20px]`}></div>
          <div className={`h-[2px] bg-white w-[20px] transition-all duration-200 ${menuOpen&&"hidden"}`}></div>
        </div>
        <p className={`${styles.logo} text-md md:!text-xl `}>Super<span className='!text-[12px] md:!text-sm text-gray-500'> Deluxe</span></p>
        <div className='hidden md:flex  gap-5'>
            {clothingCategories.map((category:Category)=>
           <div onClick={()=>showsubcategories(category.subCategories,category.id)} key={category.id} className="flex gap-1 select-none    cursor-pointer justify-center items-center">
            <a  className='text-sm' >{category.name}
             </a>
             {show.id===category.id && show.clicked?<span><RxCaretUp /></span>:<span><RxCaretDown /></span>}
             </div> 
            )}
            </div>
            <div className='flex items-center md:mr-3 gap-4'>
             <GoSearch  className='text-white text-xl md:text-2xl' />
             <HiOutlineUser className='text-white text-2xl md:text-2xl' />
             <CgShoppingBag className='text-white text-2xl md:text-2xl' />
     </div>
     </div>
     {show.clicked && <div className='fixed pt-5 border-t border-t-gray-600 top-[100px] h-[150px] w-full bg-black text-white'>
        <div className='flex w-full justify-around text-sm'>
        {subCategories.map((sub:SubCategory)=><div  key={sub.id}>{sub.name}</div>)}
        </div>
        </div>}
    </div>
  )
}

export default Header;