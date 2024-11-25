const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require('validator');
  const CategorySchema = new Schema({
      name:{
          type:String,required:true,unique:true,minLength:[4,"Category must be more than 4 characters"],maxLength:[10,"Category must not be more than 10 characters"]
          },
      slug:{
          type:String,trim:true
            },
      startingPrice:{
          type:Number,required:true},
      image:{type:String,
          validate:(value)=>{
            if(!validator.isURL(value)){
              throw new Error("Image url is not valid")
            }
          }
      },
    subcategories:[
      {type:mongoose.Schema.Types.ObjectId,
      ref:'SubCategory'
    }
    ]
  },{timestamps:true})
  const CategoryModel = mongoose.model("Category",CategorySchema);
  const SubcategorySchema = new Schema(
      {
        name: {
          type: String,
          required: true,
          unique: true,
          minLength: [4, "Subcategory name must be more than 4 characters"],
          maxLength: [20, "Subcategory name must not be more than 20 characters"],
        },
        slug: {
          type: String,
          trim: true,
        },
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },
        products:[
          {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
          }
        ],
        image: {
          type: String,
          validate: (value) => {
            if (!validator.isURL(value)) {
              throw new Error("Image URL is not valid");
            }
          },
        },
      },
      { timestamps: true }
    );
  SubcategorySchema.pre('save',async function(next){
     try{
         const category = await CategoryModel.findById(this.category);
         if(!category){
          throw new Error("Category not found")
         }
         else{
           await category.updateOne({$push:{subcategories:this._id}})
           next();
         }
         
        }
     catch(err){
      next(err);
     }
  })
  const SubCategoryModel = mongoose.model("SubCategory", SubcategorySchema);

  const ProductSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, "Product name must be more than 4 characters"],
        maxLength: [50, "Product name must not be more than 50 characters"],
      },
      slug: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        minLength: [10, "Description must be more than 10 characters"],
        maxLength: [1000, "Description must not exceed 1000 characters"],
      },
      price: {
        type: Number,
        required: true,
        min: [0, "Price must be at least 0"],
      },
      discount: {
        type: Number,
        default: 0, // Optional discount percentage
        min: [0, "Discount cannot be less than 0"],
        max: [100, "Discount cannot exceed 100"],
      },
      discountedPrice:{
        type:Number
      },
      stock: {
        type: Number,
        required: true,
        min: [0, "Stock cannot be less than 0"],
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
      },
      images: [
        {
          type: String,
          validate: (value) => {
            if (!validator.isURL(value)) {
              throw new Error("Image URL is not valid");
            }
          },
        },
      ],

      attributes: {
        type: Object,
        default: {}, 
      },
    },
    { timestamps: true }
  );
  ProductSchema.pre('save',async function(next){
    try{
      if (!this.discountedPrice || this.discountedPrice === 0) {
        this.discountedPrice = this.price;
      }
        const subcategory = await SubCategoryModel.findById(this.subcategory);
        if(!subcategory){
         throw new Error("Category not found")
        }
        else{
          await subcategory.updateOne({$push:{products:this._id}})
        }
        next();
       }
    catch(err){
     next(err);
    }
 })
  const ProductModel = mongoose.model("Product", ProductSchema);
  
module.exports ={CategoryModel,SubCategoryModel,ProductModel};