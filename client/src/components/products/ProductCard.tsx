import React from 'react'
import { Product } from '../../types/CategoryType'
import { Link } from 'react-router-dom';

const ProductCard:React.FC<{product:Product}> = ({product}) => {
  return (
    <Link to={`/product/${product.slug}`}>
    <div className="h-[350px] w-[150px] md:h-[560px] md:w-[380px]" key={product._id}>
        <img className="w-full border h-[250px] md:h-[450px] object-cover" src={product.images[0]} alt="" />
        <div className="p-2 ">
           <p className="text-sm md:text-lg">{product.name}</p> 
            <p className="text-[12px] md:text-sm text-gray-500 tracking-widest">Rs. {(product?.discountedPrice&&product?.discountedPrice!==product.price)?product.discountedPrice:product.price} <span className="pl-3 text-[12px] text-gray-400 line-through">{product?.discountedPrice && product?.discountedPrice!==product.price && `Rs. ${product.discountedPrice}`}</span></p>
            <button className="w-full my-1 rounded-xl border hover:bg-black hover:text-white transition-all duration-300 border-black text-sm md:text-md px-1 md:px-3 py-1 md:py-2">Buy Now</button>
            <video></video>
            </div>
    </div>
    </Link>
  )
}

export default ProductCard;