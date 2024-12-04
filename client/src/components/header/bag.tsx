import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { MenuProvider } from "../../context/MenuContext";
import { addtoCart,removeFromCart,deleteFromCart } from "../../store/reducers/cart/cartReducer";
import { RiDeleteBinLine } from "react-icons/ri";
import { TotalPrice } from "../../utils/calculateTotalPrice";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
const Bag = ({isOpen}:{isOpen:boolean}) => {
    const cart = useSelector((state:RootState)=>state.Cart);
    const dispatch = useDispatch();
    const {menu,setMenu} = useContext(MenuProvider);
    console.log(cart)
  return (
    <div className={`!top-0 right-0 min-h-screen w-full fixed  duration-200 sm:w-[350px] bg-white z-[500] overflow-y-auto overflow-x-hidden transition-transform transform ${isOpen ?"translate-x-0" :"translate-x-[100%]"}`}>
  {cart.length>0 ?
  <div className="px-3 relative mt-5 max-h-[calc(100vh-160px)] mb-5 border-b border-gray-400 overflow-y-scroll">
    <TfiClose  onClick={()=>setMenu(false)} size={36} className="absolute cursor-pointer text-md md:text-2xl right-1 top-4 md:top-0  " />
    <h2 className="text-2xl mt-2 font-bold text-gray-900">Your Bag</h2>
    <div className="flex mt-5 text-gray-500 uppercase justify-between w-full text-[10px]">
        <p>product</p>
        <p>Total</p>
    </div>
     <hr />
    <div className="space-y-2 mt-5">
    {cart.map((item) => (
    <div key={item._id} className="flex justify-between items-center">
    <div key={item._id} className="flex gap-4 p-4 border-b border-gray-300">
        <img 
            src={item.images[0]} 
            alt={item.name} 
            className="md:w-[100px] w-[70px] cursor-pointer h-[100px] md:h-[150px] border rounded-md object-cover" 
        />
        <div className="desc cursor-pointer flex justify-between flex-col  h-[120px] md:h-[150px] text-gray-700 text-sm">
            <div className="my-3">
                <h1 className="text-base md:text-lg  font-semibold hover:underline">{item.name.slice(0,15)}{item.name.length>15 && "..."} </h1>
                <p className="text-gray-700 text-sm md:text-md font-light">Rs.{item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-between  gap-2 md:gap-4 border border-gray-600 rounded-full w-[120px] py-1 md:py-2 shadow-md">
                    <button onClick={()=>dispatch(removeFromCart(item))} className="text-gray-600 pl-3 text-xl hover:text-gray-800 transition duration-200">−</button>
                    <p className="text-gray-800 pl-3 font-semibold">{item.quantity}</p>
                    <button onClick={()=>dispatch(addtoCart(item))} className="text-gray-600 text-xl px-3 hover:text-gray-800 transition duration-200">+</button>
                </div>
             <button onClick={()=>dispatch(deleteFromCart(item))} className="mx-3"><RiDeleteBinLine className="hover:scale-100 text-lg transition-all duration-400" /></button>
            </div>
        </div>
    </div>
    <div className="px-2 text-sm md:text-md">Rs.{item.quantity*item.price}</div>
    </div>
))}
    </div>
  </div>


  :
  <div className="space-y-5 px-3 relative">
    <TfiClose onClick={()=>setMenu(false)} size={22} className="absolute cursor-pointer text-md md:text-2xl right-4 top-1 " />
    <h2 className="text-2xl font-bold text-gray-900">Your Bag</h2>
     <hr />
     <div className="space-y-10 flex flex-col items-center w-full justify-center">
        <p>Your Cart is Empty</p>
     <div className="flex justify-center items-center">
        <button className="p-3 border bg-black  text-white">Shop Now</button>
        </div>
        </div>
    </div>}
    <div className={`${cart.length>0?"fixed":"hidden"} h-[130px] text-gray-500 bottom-3 w-full`}>
    <div className="flex text-black justify-between p-2">
     <p className="">Subtotal</p>
     <p>Rs.{TotalPrice(cart)}</p>
    </div>
    <p className="text-sm p-2">Tax included. Shipping calculated at checkout.</p>
    <Link to='/checkout'><button onClick={()=>setMenu(false)} className=" bg-black text-white bottom-3 w-full m-2 px-3 py-2">Checkout</button></Link>
    </div>
    </div>
  )
}
export default Bag