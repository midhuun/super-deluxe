import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Category, result } from "../../types/CategoryType";
import { Link } from "react-router-dom";
const TopItems = () => {
  const products:any = useSelector((state:RootState) => state.Products);
  const {items,status}:result = products;
  return (
    <div className="flex flex-wrap mt-[10px] md:mt-[120px] justify-center gap-4 md:gap-8">
        {items?.categories?.map((item:Category) =>
           < Link to={`/category/${item.slug}`} key={item._id}> <div key={item._id} className="h-[200px] relative w-[140px] sm:h-[450px] sm:w-[300px] md:w-[330px] md:h-[500px]">
                <img className="w-full border rounded-md  object-cover h-[70%]" src={item.image} alt={item.name} />
                <div className=" w-full flex justify-center absolute top-[100px] sm:top-[280px] md:top-[300px] ">
                    <div className="w-[80%] h-[60px] md:h-[100px] flex flex-col justify-center
                     items-center bg-black text-white md:space-y-2">
                        <p className="advertisement text-md md:text-xl">{item.name}</p>
                        <p className="advertisement  font-semibold text-[12px] md:text-sm">From {item.startingPrice.toString()} /-</p>
                    </div>
                </div>
             </div>
             </Link>
             )}
    </div>
  )
}

export default TopItems