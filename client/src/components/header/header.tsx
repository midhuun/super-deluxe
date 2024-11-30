import { Category, result, StoreData, SubCategory } from '../../types/CategoryType';
import { GoSearch } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import styles from './header.module.css'
import { RxCaretDown,RxCaretUp } from "react-icons/rx";
import { CgShoppingBag } from "react-icons/cg";
import { useContext, useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Bag from './bag';
import { MenuProvider } from '../../context/MenuContext';
type showType = {
    clicked:boolean,
    id:number
}

const Header:React.FC = () => {
  const cartItems = useSelector((state:RootState)=>state.Cart);
  const data = useSelector((state:RootState) => state.Products);
  const [show, setShow] = useState<showType>({clicked:false,id:1});
  const [menuOpen,setmenuOpen] = useState(false);
  const {menu,setMenu} = useContext(MenuProvider);
  const [subCategories,setSubCategories] = useState<SubCategory[]>([]);
  const result:any = useSelector((state:RootState) => state.Products);
 const {items}:result = result;
  function showsubcategories(sub:SubCategory[],id:number){
    setShow((prev)=>({id:id,clicked:!prev.clicked}))
      setSubCategories(sub);
  }
  return (
    <>
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
        <Link to='/'>
        <p className={`${styles.logo} cursor-pointer text-md md:!text-xl `}>Super<span className='!text-[12px] md:!text-sm text-gray-500'> Deluxe</span></p>
        </Link> 
        <div className='hidden md:flex gap-5'>
            {items?.categories?.map((category:Category)=>
           <div onClick={()=>showsubcategories(category.subcategories,category._id)} key={category._id} className="flex gap-1 select-none    cursor-pointer justify-center items-center">
            <a  className='text-sm' >{category.name}
             </a>
             {show.id===category._id && show.clicked?<span><RxCaretUp /></span>:<span><RxCaretDown /></span>}
             </div> 
            )}
            </div>
            <div className='flex items-center md:mr-3 gap-4'>
              <button><GoSearch  className='text-white text-xl md:text-2xl' /></button>
              {data.items?.user?<Link to='/account'><HiOutlineUser className='text-white text-2xl md:text-2xl' /></Link>: <Link to='/login'><HiOutlineUser className='text-white text-2xl md:text-2xl' /></Link>}
             <button>
              <div  onClick={()=>setMenu(true)} className="relative cursor-pointer">
              <div className="w-5 z-[100]  absolute text-sm -top-2 font-semibold cursor-pointer bg-black border-gray-800 -right-2 h-5 shadow-lg rounded-full flex justify-center items-center  border">{cartItems.length}</div>
              <CgShoppingBag  className='text-white  text-2xl md:text-2xl' />
              </div>
             </button>
     </div>
     </div>
     {show.clicked && <div className='fixed pt-5 border-t border-t-gray-600 top-[100px] h-[150px] w-full bg-black text-white'>
        <div className='flex w-full justify-around text-sm'>
        {subCategories.map((sub:SubCategory)=><div  key={sub._id}>{sub.name}</div>)}
        </div>
        </div>}
    </div>
    <div className='relative'>
    <Bag isOpen={menu} />
    </div>
    
    </>
  )
}

export default Header;