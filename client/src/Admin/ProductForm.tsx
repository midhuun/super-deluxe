import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Category, result, SubCategory } from "../types/CategoryType";
import { calculateDiscount } from "../utils/calculateDiscount";

const ProductForm = () => {
  const products: any = useSelector((state: RootState) => state.Products);
  const { items }: result = products;

  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    discountedPrice: "",
    stock: "",
    category: "",
    subcategory: "",
    images: [],
    specs: {},
  });

  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [attributes, setAttributes] = useState({});
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const images = formData.images.map((image:any)=>{
      const uploadFile = new FormData();
    uploadFile.append('key','01652dd65618405881b1af0bd803c8b7');
    uploadFile.append('image',image);
     const file = fetch('https://api.imgbb.com/1/upload',{
      method:'POST',
      body:uploadFile
    }).then((res)=> res.json())
    return file
    })
   const imageurl= Promise.all(images).then((res)=>res);
   console.log(imageurl);
    setformData((prev)=>({...prev,specs:attributes}))
    const discountedPrice = calculateDiscount(
      Number(formData.price),
      Number(formData.discount)
    );
    setformData((prev:any) => ({ ...prev, discountedPrice:discountedPrice }));
    const res = await fetch('http:localhost:3001/admin/create/product',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    })
    const result = await res.json();
  };
  const handleAttribute = () => {
    if (!key || !value) {
      alert("Key or value is missing");
    } else {
      setAttributes((prev) => ({ ...prev, [key]: value }));
      setKey("");
      setValue("");
    }
  };
  console.log(attributes)
  const handleRemoveAttribute = (key: string) => {
    setAttributes((prev) => {
      const newAttributes: any = { ...prev };
      delete newAttributes[key];
      return newAttributes;
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="w-full border rounded p-2"
            name="name"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Enter product description"
            name="description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            min={0}
            onChange={handleChange}
            name="price"
            type="number"
            className="w-full border rounded p-2"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Discount Percent</label>
          <input
            onChange={handleChange}
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
            name="stock"
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Enter stock quantity"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Select category</option>
            {items.categories.map((category: Category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Subcategory</label>
          <select
            name="subcategory"
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Select subcategory</option>
            {items.subCategories.map((subcategory: SubCategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>

        <label className="block text-gray-700">Specifications</label>
        <div className="mb-4 mt-2 items-center flex gap-5">
          <div>
            <label className="block text-gray-700">Key</label>
            <input
              onChange={(e) => setKey(e.target.value)}
              type="text"
              value={key}
              className="w-full border rounded p-2"
              placeholder="Key"
            />
          </div>
          <div>
            <label className="block text-gray-700">Value</label>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              value={value}
              className="w-full border rounded p-2"
              placeholder="value"
            />
          </div>
          <div className="text-white">add</div>
          <button
            onClick={handleAttribute}
            type="button"
            className="px-3 h-10 text-white bg-blue-500"
          >
            Add
          </button>
        </div>

        {Object.keys(attributes).map((key) => (
          <div key={key} className="mb-4 mt-2 w-full items-center flex gap-5">
            <p className="border px-3 w-1/2 py-2">{key}</p>
            <p className="border px-3 w-1/2 py-2">{attributes[key]}</p>
            <button
              onClick={() => handleRemoveAttribute(key)}
              className="px-3 h-10 text-white bg-red-500"
              type="button"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            onChange={(e) =>
              setformData((prev) => ({
                ...prev,
                images: Array.from(e.target.files || []),
              }))
            }
            type="file"
            multiple
            className="w-full border rounded p-2"
          />
        </div>

        <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
