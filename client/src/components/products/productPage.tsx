import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/CategoryType";
import { IoCloseSharp } from "react-icons/io5";
import { sizeChart } from "../../utils/sizechart";
import SizeCard from "./SizeCard";

const ProductPage = () => {
    const params = useParams();
    const {product} = params;
    const [productdata,setproductdata] = useState<Product | null >(null);
    console.log(productdata)
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
    
  return (
   <div className="w-full p-2 flex justify-center">
   <div className="flex justify-center pt-5 md:pt-10 md:px-[5%] md:gap-[80px] w-full md:justify-start flex-col md:flex-row">
    <img className="h-full object-cover w-full border md:w-[50%]" src={productdata?.images[0]} alt="" />
    <div className=" space-y-2 md:space-y-3">
      <h1  className="text-xl md:text-4xl">{productdata?.name}</h1>
      <h2 className="font-light text-xl tracking-widest">Rs. {productdata?.price}.00</h2>
      <p className="font-light text-sm text-gray-600">Tax included. Shipping calculated at checkout.</p>
      {chartOpen && 
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
                    <div className="relative rounded-lg bg-white shadow-lg w-11/12 md:w-1/2 h-3/5 overflow-auto p-6">
                     <button onClick={()=>setchartOpen(false)}><IoCloseSharp className="absolute top-3 h-10 w-10 hover:scale-110 transition-all duration-300 right-3 cursor-pointer rounded-full hover:shadow-xl hover:border p-2"  /></button> 
                       <p className="md:text-xl  bg-white pb-10 text-gray-500">Solid T-shirt-Size Chart (in inches) Choose a bigger size for a comfort fit</p>
                        <h2 className="md:text-xl font-semibold mb-4">Size Chart</h2>
                       <SizeCard />
                    </div>
                </div>
      }
        
    </div>
   </div>
   </div>
  )
}

export default ProductPage;