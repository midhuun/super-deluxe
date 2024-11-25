import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Product, result } from "../../types/CategoryType";
import { useParams } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { useEffect } from "react";
const CategoryProducts = () => {
  useEffect(()=>{
     window.scrollTo(0,0);
  },[])
    const params = useParams();
    const {categoryName} = params;
    console.log(categoryName)
    const products:any = useSelector((state:RootState) => state.Products);
    const {items}:result = products;
    const filteredItems= items?.products?.filter((product:Product)=>product.category.slug === categoryName);
    console.log(filteredItems)
  return (
    <div className="flex gap-1 px-2 pt-2 md:gap-4 justify-center md:justify-start flex-wrap">
    {filteredItems?.map((product:Product)=>
    <div key={product._id}>
        <ProductCard product={product} />
    </div>
    )}
    </div>
  )
}

export default CategoryProducts;