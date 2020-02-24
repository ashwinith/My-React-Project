let mongoose=require("mongoose");

//Categotry Schema

let categorySchema=new mongoose.Schema({
    categoryName:{type:String}
});

let categoryModel = mongoose.model("CategoryDetails",categorySchema);

module.exports=categoryModel;