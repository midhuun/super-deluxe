import { useState } from "react";

const ProductForm = () => {
   const [formData,setformData] = useState({
    name:"",
    description:"",
    price:"",
    discount:"",
    discountedPrice:"",
    stock:"",
    category:"",
    subcategory:"",
    images:[],
    attributes:{}
   })
   const handleChange = (e:any) =>{
       const {name,value} = e.target;
       setformData((prev)=>({...prev,[name]:value}))
   }
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              name="name"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full border rounded p-2"
              placeholder="Enter product description"
              name="description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              name="price"
              type="number"
              className="w-full border rounded p-2"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Discount Percent</label>
            <input
              type="number"
              name="discount"
              className="w-full border rounded p-2"
              placeholder="Enter discount Percentage"
              min={1}
              max={100}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Stock</label>
            <input
              type="number"

              className="w-full border rounded p-2"
              placeholder="Enter stock quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select className="w-full border rounded p-2">
              <option>Select category</option>
              {/* Dynamically load categories here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subcategory</label>
            <select className="w-full border rounded p-2">
              <option>Select subcategory</option>
              {/* Dynamically load subcategories here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter image URL"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    );
  };
  export default ProductForm;