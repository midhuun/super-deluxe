//@ts-nocheck
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductCard from './ProductCard';
import { Product } from '../../types/CategoryType';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductList = () => {
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 0,
                left: scrollOffset,
                behavior: 'smooth',
            });
        }
    };
    const products:any = useSelector((state:RootState) => state.Products);
    const {subCategories} = products?.items || {subCategories:[]};
    const {status} = products;
  return (
    <>
    {status === 'succeeded' &&
    <div className="space-y-2 md:pl-5 p-3">
    <p className='text-3xl'>{subCategories && subCategories[0]?.name}</p>
    <div className="">
    <div 
            ref={scrollRef} 
            className="flex overflow-x-scroll overflow-y-hidden  gap-5 py-5 scrollbar"
        >
            { subCategories && subCategories[0]?.products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
       <div className="flex justify-center gap-3">
       <button 
            onClick={() => scroll(-350)} 
            className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
            <FaArrowLeft />
        </button>
        <button 
            onClick={() => scroll(350)} 
            className=" p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
            <FaArrowRight />
        </button>
       </div>
       
    </div>
</div>
}
    </>
  )
}

export default ProductList