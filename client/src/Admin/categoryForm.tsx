import  { useState } from "react";

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    startingPrice: "",
    imageFile: null,
    image:""
  });
  const handleChange = (e:any) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const uploadFile = new FormData();
    uploadFile.append('key','01652dd65618405881b1af0bd803c8b7');
    uploadFile.append('image', formData.imageFile);
    const file = await fetch('https://api.imgbb.com/1/upload',{
      method:'POST',
      body:uploadFile
    })
    const result = await file.json();
    if(result.status ===200){
      const url =result.data.display_url;
      setFormData((prev)=>({...prev,image:url}));
      const data = await fetch('http://localhost:3001/admin/create/category',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
      })
      const res = await data.json();
      if(res.status === 200){
        alert('Category created successfully')
      }
      else{
        alert(res.message)
      }
      console.log(formData)
    }
    else{
      console.log("failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded p-2"
            placeholder="Enter category name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Starting Price</label>
          <input
            type="number"
            name="startingPrice"
            className="w-full border rounded p-2"
            placeholder="Enter starting price"
            value={formData.startingPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="imageFile"
            required
            className="w-full border rounded p-2"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
