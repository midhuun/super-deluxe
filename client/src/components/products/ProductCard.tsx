import React, { useRef, useState } from 'react'
import { Product } from '../../types/CategoryType'
import { Link } from 'react-router-dom';

const ProductCard:React.FC<{product:Product}> = ({product}) => {
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setCurrentImage(product.images[1]); // Change to the second image on hover
    }
  };
  const handleMouseLeave = () => {
    setCurrentImage(product.images[0]); // Revert to the original image
  };
  return (
    <Link to={`/product/${product.slug}`}>
    <div className="h-[300px] w-[140px] md:h-[560px] md:w-[350px]" key={product._id}>
      <div className='overflow-hidden h-[200px] md:h-[450px]'>
        <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full border tranition-all duration-[1s]  h-[200px] md:h-[450px] object-cover hover:scale-110 " src={currentImage} alt="" />
        </div>
        <div className="p-2 ">
           <p className="text-[14px] md:text-lg h-[40px] overflow-hidden">{product.name}</p> 
            <p className="text-[12px] md:text-sm text-gray-500 tracking-widest">Rs. {(product?.discountedPrice!==product.price)?product.price:product.discountedPrice} <span className="pl-3 text-[12px] text-gray-400 line-through">{product?.discountedPrice && product?.discountedPrice!==product.price && `Rs. ${product.discountedPrice}`}</span></p>
            <button className="w-full my-1 rounded-xl border hover:bg-black hover:text-white transition-all duration-300 border-black text-sm md:text-md px-1 md:px-3 py-1 md:py-2">Buy Now</button>
            <video></video>
            </div>
    </div>
    </Link>
  )
}

export default ProductCard;