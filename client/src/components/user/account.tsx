import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/reducers/products/ProductApiThunk";

const Account = () => {
  const products = useSelector((state:RootState) => state.Products);
  const dispatch = useDispatch<AppDispatch>();
  const orders = products?.items?.user?.cart;
 async function logout(){
  const response = await fetch("http://localhost:3001/logout");
  if(response.ok){
    console.log("Logout Successfull");
    dispatch(fetchProducts());
 }
 else{
  console.log("Logout Failed")
 }
}
  return (
    <div className="p-3 space-y-3">
      <h1 className="md:text-3xl text-xl">Account</h1>
      <div onClick={logout} className="flex cursor-pointer gap-2">
        <CiUser className=" text-xl" />
        <p className="underline">Logout</p>
      </div>
      <h2 className="md:text-xl text-xl">Order History</h2>
      {(orders && orders?.length>0)?"":<p className="text-lg">You haven't placed any orders yet.</p>}
    </div>
  )
}

export default Account;