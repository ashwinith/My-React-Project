let mongoose=require("mongoose");
let joi=require("@hapi/joi");
let config=require("config");
let jwt=require("jsonwebtoken");

let userSchema=new mongoose.Schema({
    userFirstName:{type:String, min:3,max:20,trim: true,required:true},
    userLastName:{type:String,min:4,max:20,trim: true,required:true},
    userLogin:
    {
        username:{type:String, min:6,max:20,alphanum:true,trim:true,unique:true,required:true},
    userpassword:{type:String, min:6, max:12,alphanum:true,trim:true,required:true},
    userEmail:{type:String,alphanum:true,trim:true,unique:true,required:true},
    
    },
   
    usercountry:{type:String,required:true},
    userCity:{type:String,required:true},
    userState:{type:String,required:true},
    userPostCode:{type:Number,required:true},
    usercontact1:{type:Number,required:true},
    usercontact2:{type:Number},
    userAddress1:{type:String,alphanum:true,required:true},
    userAddress2:{type:String,alphanum:true},
    userAddress3:{type:String,alphanum:true},

    resetpasswordtoken: { type: String },
    resetpasswordexpires:{type: Date},
    isAdmin: { type:Boolean},
});

userSchema.methods.UserToken = function () {
    let token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin}, config.get("apitoken"));
    return token;
};


let userModel=mongoose.model("userDetails",userSchema);

function validationerror(error){
    let Schema=joi.object({
        userFirstName:joi.String().min(3).max(20).required(),
        userLastName:joi.String().min(4).max(20).required(),
        userLogin:{
            username:joi.String().min(6).max(20).alphanum().required(),
            userpassword:joi.String().min(6).max(12).alphanum().required(),
            userEmail:joi.String().required().email()
        },
        usercountry:joi.String().required(),
        userCity:joi.String().required(),
        userState:joi.String().required(),
        userPostCode:joi.Number().required(),
        usercontact1:joi.Number().required(),
        usercontact2:joi.Number(),
        userAddress1:joi.String().alphanum().required(),
        userAddress2:joi.String().alphanum(),
        userAddress3:joi.String().alphanum()


    });

    return Schema.validate(error);

}

module.exports={userModel,validationerror};