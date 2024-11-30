const {ProductModel,SubCategoryModel,CategoryModel} = require('../models/ProductModel');
const generateSlug = require('../utils/generateSlug');
const adminRequest = async(req,res)=>{
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
}
module.exports= {adminRequest};