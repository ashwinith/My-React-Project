let mongoose=require("mongoose");
let joi=require("@hapi/joi");

let contactSchema=new mongoose.Schema({

    name:{type:String,minlength:3,maxlength:50,required:true},
    email:{type:String,minlength:5,maxlength:50,required:true},
    message:{type:String,minlength:2,maxlength:100,required:true}

});

let contactModel= mongoose.model("ContactDetails",contactSchema);

function validationError(error){
    let schema=Joi.object({
        name:Joi.string().min(3).max(50).required(),
        email:Joi.string().min(5).max(50).required().email(),
        message:Joi.string().min(2).max(100).required()
    });
    
    return schema.validate(error);
    
    }
    

module.exports={contactModel,validationError};