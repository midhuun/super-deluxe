import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/CategoryType";
import { IoCloseSharp } from "react-icons/io5";
import SizeCard from "./SizeCard";
import OfferCard from "./offerCard";
import { sizeChart } from "../../utils/sizechart";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DropdownCard from "./dropdownCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addtoCart, removeFromCart } from "../../store/reducers/cart/cartReducer";
import { CartType } from "../../types/CartType";
const ProductPage = () => {
    const params:any = useParams();
    const [size,setsize] = useState<any>(sizeChart[0]);
    const dispatch = useDispatch();
    const cart:any = useSelector<RootState>((state)=>state.Cart);
    const {product} = params;
    const [productdata,setproductdata] = useState<Product | null >(null);
    const [chartOpen,setchartOpen] = useState<Boolean>(false);
useEffect(()=>{
   window.scrollTo(0,0)
   const getProduct = async()=>{
    try{
     const response = await fetch(`http://localhost:3001/product/${product}`);
     const data = await response.json();
     setproductdata(data[0])
     console.log(data[0])
    }
    catch(err){
        console.log(err);
    }
   }
   getProduct()
},[])
  const handleAddToCart = (product:any) => {
    dispatch(addtoCart(product));
   
 }
  return (
   <div className="w-full p-3 flex justify-center">
   <div className="flex justify-center pt-5 md:pt-10 md:px-[5%] md:gap-[80px] w-full md:justify-start flex-col md:flex-row">
    <img className="md:h-[130vh] object-cover w-full border md:w-[50%]" src={productdata?.images[0]} alt="" />
    <div className=" space-y-2 pt-5 md:pt-0 md:w-[40%] md:space-y-3">
      <h1  className="text-lg md:text-4xl">{productdata?.name}</h1>
      <h2 className="font-light text-md md:text-xl tracking-wide md:tracking-widest">Rs. {productdata?.price}.00</h2>
      <p className="font-light text-sm text-gray-600">Tax included. Shipping calculated at checkout.</p>
      <div className={`fixed ${chartOpen?"scale-100":"scale-0"} transition-transform ease-out duration-300  inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50`}>
                    <div className="relative rounded-lg bg-white shadow-lg w-11/12 md:w-1/2 h-3/5 overflow-auto p-6">
                     <button onClick={()=>setchartOpen(false)}><IoCloseSharp className="absolute top-3 h-10 w-10 hover:scale-110 transition-all duration-300 right-3 cursor-pointer rounded-full hover:shadow-xl hover:border p-2"  /></button> 
                       <p className="md:text-xl  bg-white pb-10 text-gray-500">Solid T-shirt-Size Chart (in inches) Choose a bigger size for a comfort fit</p>
                        <h2 className="md:text-xl font-semibold mb-4">Size Chart</h2>
                       <SizeCard />
                    </div>
                </div>
     <OfferCard/>   
     {productdata?.attributes?.color && (
    <div className="flex items-center space-x-2 p-2 ">
        <p className="text-gray-700 font-semibold">Color:</p>
        <div 
            className={`h-6 w-6 border-4 border-white shadow-lg rounded-full transition-transform transform hover:scale-110`} 
            style={{ backgroundColor: productdata.attributes.color.toLowerCase() }}
            title={productdata.attributes.color} 
        ></div>
        <p className="text-gray-800 font-medium">{productdata.attributes.color}</p>
    </div>
)}
    <div className="w-full text-sm p-2 bg-slate-100 rounded-md text-gray-600">
      <p >To Fit Your Chest Size :
        <span className="!text-blck pr-2">{size.chest}</span> 
         | Shoulder: <span className="!text-blck pr-2">{size.shoulder}</span> 
         | Length: <span className="!text-blck pr-2">{size.length}</span>
         | Sleeve Length: <span className="!text-blck">{size.sleeveLength}</span></p>
    </div>
    <div >
        <p className="pb-2 font-light">Size</p>
        <div className="flex gap-3 flex-wrap">
        {sizeChart.map(sizechart=>
          <div onClick={()=>setsize(sizechart)} key={sizechart.chest} className={`flex ${size.chest==sizechart.chest?"bg-black text-white":"bg-white text-black"} cursor-pointer font-sans justify-center  hover:border-black transition-all duration-300 items-center py-[6px] border rounded-3xl border-gray-500 px-4`}>
            <p>{sizechart.chest}/{sizechart.size}</p>
          </div>
        )}
        </div>
      </div>
      <div onClick={()=>setchartOpen(true)} className="flex cursor-pointer items-center gap-2">
        <img src="/size.png" className="w-8 object-contain h-8" alt="" />
        <p className="text-sm">Size Chart</p>
      </div>
      <div className="font-light text-[8px] md:text-[10px] space-y-1 md:space-y-2">
        <p>OUR MODEL IS 5’11", CHEST 38 AND IS WEARING A MEDIUM FIT.</p>
        <p className=" break-words "> SLIM FIT DESIGN. WE RECOMMEND A BIGGER SIZE IF YOU ARE LOOKING FOR REGULAR FIT.</p>
      </div>
      <div className="quantity">
        <p className="">Quantity</p>
        <div className="flex mt-4 text-gray-700 md:text-lg font-sans border-black justify-between items-center w-[100px] md:w-[120px]  border  space-x-2">
          <button onClick={()=>dispatch(removeFromCart(productdata))} className="p-2 cursor-pointer hover:text-gray-900 md:p-3">-</button>
          <p>1</p>
          <button onClick={()=>dispatch(addtoCart(productdata))} className="hover:text-gray-900 cursor-pointer p-2 md:p-3">+</button>
        </div>
      </div>
      {/* Buy Now and Cart */}
      <div className="space-y-3 p-2">
        <button onClick={()=>handleAddToCart(productdata)} className="w-full md:w-[75%] border-gray-500 hover:border-black py-3 border rounded-3xl">Add to Cart</button>
        <button  className="w-full md:w-[75%] hover:shadow-sm  hover:shadow-[#202020] border-black bg-black text-white py-3 border rounded-3xl">Buy Now</button>
      </div>
      {/* Delivery Info */}
      <div className="h-[100px] text-[12px] md:text-[16px] break-words font-semibold flex w-full border border-gray-300">
        <div className="border-r flex flex-col gap-3 justify-center items-center w-1/3 border-gray-300">
          <BsFillCartCheckFill className="text-xl md:text-2xl" />
          <p>Day of order</p>
        </div>
        <div className="border-r flex flex-col gap-3 justify-center items-center w-1/3 border-gray-300">
          <FaTruck className="text-xl md:text-2xl" />
          <p>Order Ready</p>
        </div>
        <div className="border-r flex flex-col gap-3 justify-center items-center w-1/3 border-gray-300">
          <FaLocationDot className="text-xl md:text-2xl" />
          <p className="text-center flex flex-col">Delivered in <span className="font-light">7-10 days</span></p>  
        </div>
      </div>
      {/* Instructions */}
      <DropdownCard attributes={productdata?.attributes} description={productdata?.description}/>
    </div> 
   </div>
   </div>
  )
}

export default ProductPage;