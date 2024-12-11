import Discount from "./components/header/discount"
import Header from "./components/header/header"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/user/login";
import Loading from "./components/loading";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/reducers/products/ProductApiThunk";
import { AppDispatch, RootState } from "./store/store";
import CategoryProducts from "./components/categoryCard/categoryProducts";
import ProductPage from "./components/products/productPage";
import Account from "./components/user/account";
import Footer from "./components/footer/footer";
import Checkout from "./components/checkout/checkout";
import { MenuProvider } from "./context/MenuContext";
import AdminPanel from "./Admin/adminForm";
function App() {
  const products = useSelector((state:RootState) => state.Products);
  const dispatch = useDispatch<AppDispatch>();
  const {status} = products;
  console.log(products)
  const {isAuthenticated,setisAuthenticated} = useContext(MenuProvider);
  setTimeout(() => {
    if(products.items?.user){
      setisAuthenticated(true);
    }
  }, 600);
  console.log(isAuthenticated);
  useEffect(()=>{
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 1000);
  },[dispatch]);
  return (
    <>
    <Router>
      <>
      {status!=="succeeded" && <Loading />}
     
      <Discount />
      <Header />
      
    </>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/:categoryName" element={<CategoryProducts/>} />
      <Route path="/product/:product" element={<ProductPage/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/admin/dashboard" element={<AdminPanel/>} />
    </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
