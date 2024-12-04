import { useSelector } from 'react-redux';
import styles from '../header/header.module.css';
import { RootState } from '../../store/store';
import { CartType } from '../../types/CartType';
import { TotalPrice } from '../../utils/calculateTotalPrice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const cart = useSelector((state:RootState)=>state.Cart);
    console.log(cart)
    const products = useSelector((state:RootState) => state.Products);
   useEffect(()=>{
   },[])
  return (
    <>
    {(cart.length>0)? <div className="bg-gray-100 min-h-screen p-2 md:p-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-2 lg:p-8">
        <div className="text-center mb-5 md:mb-10">
          <h1 className={`text-xl ${styles.logo} sm:text-3xl font-bold text-gray-800 tracking-wide`}>
            SUPER <span className="text-blue-600">DELUXE</span>
          </h1>
        </div>

        {/* Form and Order Summary Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Delivery Form */}
          <div className="flex-1 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Delivery Information
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input defaultValue={products?.items?.user?.name || ""}
                    type="text"
                    className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apartment/Flat No.
                </label>
                <input
                  type="text"
                  className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter your apartment/flat no."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="City name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm">
                    <option>Tamil Nadu</option>
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code
                </label>
                <input
                  type="text"
                  className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter your PIN code"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-5">
              {cart?.map((item:CartType)=> <div className="flex items-center justify-between border-b pb-4">
                <img
                  src={item.images[0]}
                  alt="Product 1"
                  className="w-12 h-16 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <p className="text-gray-700 text-sm sm:text-base">
                    {item.name}
                  </p>
                </div>
                <span className="font-semibold text-gray-800 text-[12px] sm:text-sm">
                  ₹{item.price} .00  <span className='text-[12px]'>X </span>{item.quantity}
                </span>
              </div>)}  
              {/* Discount */}
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                <span>Discount (BUY2GET5%)</span>
                <span>-₹74.90</span>
              </div>
              {/* Total */}
              <div className="flex justify-between items-center text-sm sm:text-lg font-semibold text-gray-800 mt-6">
                <span>Total</span>
                <span>₹{TotalPrice(cart)}</span>
              </div>
              {/* Proceed Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-md shadow-sm hover:bg-blue-700 transition text-sm sm:text-base">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>: <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
            <p className="mt-2 text-gray-600">It seems you have no items in your cart.</p>
           <Link to='/'> <button className="mt-4 px-6 py-2 text-white bg-black rounded hover:bg-gray-800 transition duration-300">
                Return to Shop
            </button></Link>
        </div>}
   
    </>
  );
};

export default Checkout;
