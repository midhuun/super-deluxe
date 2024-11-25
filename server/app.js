const express = require("express");
const app = express();
const cors = require('cors')
const env = require("dotenv");
const generateSlug = require('./utils/generateSlug');
const {connectTODB}  = require('./config/database');
const {UserModel} = require('./models/UserModel');
const {ProductModel,SubCategoryModel,CategoryModel} = require('./models/ProductModel');
env.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.post("/user/login",async(req,res,next)=>{
    try{
    const {firstName,lastName,email,phone} = req.body;
    const user = await new UserModel(req.body);
    await user.save();
    console.log(user)
    res.send("User Created")
    }
    catch(err){
        console.log(err);
        res.status(400).send(err?.message);
    }
    
});
app.post("/admin/create/:field",async(req,res)=>{
    const params = req.params;
    const {name} = req.body
    const slug = generateSlug(name);
    try{
    if(params.field ==='category'){
      const category = await new CategoryModel({...req.body,slug});
      await category.save();
      res.send("Category Created");
    }
    else if(params.field ==='product'){
        const product = await new ProductModel({...req.body,slug});
        await product.save();
        res.send("Product Added Succesfully");
    }
    else if(params.field ==='subCategory'){
        const subCategory = await new SubCategoryModel({...req.body,slug});
        await subCategory.save();
        res.send("SubCategory added Accessfully");
    }
}
catch(err){
    console.log(err)
    res.status(400).send("Error creating Categories  "+  err.message);
}
})
app.get("/products/:category",async(req,res)=>{
    const {category} = req.params;
    try{
        const Products = await ProductModel.find({category:category})
        res.send(Products);
    }
    catch(err){
        res.send(err)
    }
})
app.get("/products",async(req,res)=>{
    try{
    const products = await ProductModel.find().populate('category');
    const subCategories = await SubCategoryModel.find().populate('category');
    const categories = await CategoryModel.find().populate({path:'subcategories',populate:{path:'products',model:'Product'}});;
    res.send({products,categories,subCategories});
    }
    catch(err){
        console.log(err)
        res.status(400).send("Error fetching products");
    }
})
app.get("/product/:name",async(req,res)=>{
    const {name} = req.params;
    try{
        const product = await ProductModel.find({slug:name});
        res.send(product)
    }
    catch(err){
        console.log(err);
        res.send("Error")
    }
})
connectTODB().then(()=>{
    app.listen(port,()=>{
        console.log("Server listening");
    })
}).catch((err)=>console.log(err))
