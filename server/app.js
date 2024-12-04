const express = require("express");
const app = express();
const cors = require('cors')
const env = require("dotenv");
const {connectTODB}  = require('./config/database');
const { UserModel } = require('./models/UserModel');
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");
const {userAuth} = require('./middleware/userauth')
const {updateUser,loginUser} = require('./requests/userRequests');
const {productRequest,uniqueProductRequest,categoryRequest} = require('./requests/productRequest');
const {adminRequest} = require('./requests/adminrequests');
env.config();
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 3000;
const SECRET = process.env.SECRET || '12@dmrwejfwf3rnwnrm';
app.post("/user/login",loginUser);
app.patch("/user/update",userAuth,updateUser);
app.post("/admin/create/:field",adminRequest)
app.get("/products/:category",categoryRequest)
app.get("/products",productRequest)
app.get("/product/:name",uniqueProductRequest);
app.get("/api/cart",userAuth, async(req,res)=>{
    const {token} = req.cookies;
    const decoded = jwt.verify(token,SECRET);
    try{
      const user = await UserModel.find({_id:decoded.id})
      res.send({message:user.cart})
    }
    catch{
        res.status(500).send({message:"Error Occured"})
    }
})
app.get("/api/cart",userAuth, async(req,res)=>{
    const {token} = req.cookies;
    const decoded = jwt.verify(token,SECRET);
    try{
      const user = await UserModel.find({_id:decoded.id})
      res.send({message:user.cart})
    }
    catch{
        res.status(500).send({message:"Error Occured"})
    }
})
app.get("/logout",(req,res)=>{
    try{
    res.clearCookie('token');
    console.log(req.cookies);
    res.status(200).send({message:"Logged out Successfully"})
    }
    catch(err){
        res.status(404).send("Error logging out")
    }
})
app.post("/api/addToCart",async(req,res)=>{
    const cart = req.body;
    console.log(cart);
    const {token} = req.cookies;
    const decoded = jwt.verify(token,SECRET);
    try{ 
        await UserModel.updateOne({_id:decoded.id},{cart:cart});
        
        res.send({message:"Item Added to Cart"})
    }
    catch(err){
        res.send("Error adding to cart");
    }
})
connectTODB().then(()=>{
    app.listen(port,()=>{
        console.log("Server listening");
    })
}).catch((err)=>console.log(err))
