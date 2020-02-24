let mongoose=require("mongoose");

// Product Schema

let productSchema=new mongoose.Schema({
    productName:{type:String},
    productImage:{type:String},
    productPrice:{type:Number},
    productcategory:{type:String},
    productsubcategory:{type:String},
    productisavailable:{type:Boolean}
});

let productModel = mongoose.model("ProductDetails",productSchema);

module.exports=productModel;