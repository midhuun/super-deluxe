import Discount from "./components/header/discount"
import Header from "./components/header/header"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/user/login";
import Loading from "./components/loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/reducers/products/ProductApiThunk";
import { AppDispatch, RootState } from "./store/store";
import { result } from "./types/CategoryType";
import CategoryProducts from "./components/categoryCard/categoryProducts";
import ProductPage from "./components/products/productPage";
function App() {
  const products = useSelector((state:RootState) => state.Products);
  const dispatch = useDispatch<AppDispatch>();
  const {status} = products;
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);
  console.log(products)
  return (
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
    </Routes>
    </Router>
  )
}

export default App
