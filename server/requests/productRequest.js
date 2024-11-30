const express = require("express");
const app = express();
const cors = require('cors')
const env = require("dotenv");
const {UserModel} = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const {ProductModel,SubCategoryModel,CategoryModel} = require('../models/ProductModel');
const cookieParser = require("cookie-parser");
env.config();
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 3000;
const SECRET = process.env.SECRET || '12@dmrwejfwf3rnwnrm';
const productRequest = async(req,res)=>{
    try{
    const {token} = req.cookies;
    console.log(token);
    const products = await ProductModel.find().populate('category');
    const subCategories = await SubCategoryModel.find().populate('category').populate('products');
    const categories = await CategoryModel.find().populate({path:'subcategories',populate:{path:'products',model:'Product'}});;
    if(token){
        try{
        const decoded = jwt.verify(token,SECRET);
        const user = await UserModel.findById(decoded.id);
        if(user){
            res.send({products,categories,subCategories,user:user});
        }
        else{
            res.send({products,categories,subCategories});
        }
        }
        catch(err){
            res.send({products,categories,subCategories});
        }
    }
    else{
        res.send({products,categories,subCategories});
    }
    }
    catch(err){
        
        res.status(400).send("Error fetching products");
    }
}
const uniqueProductRequest = async(req,res)=>{
    const {name} = req.params;
    try{
        const product = await ProductModel.find({slug:name});
        res.send(product)
    }
    catch(err){
        console.log(err);
        res.send("Error")
    }
}
const categoryRequest = async(req,res)=>{
    const {category} = req.params;
    try{
        const Products = await ProductModel.find({category:category})
        res.send(Products);
    }
    catch(err){
        res.send(err)
    }
}
module.exports = {productRequest,uniqueProductRequest,categoryRequest};