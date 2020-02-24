let express=require("express");
let router=express.Router(); /*Whenever we are creating external express file this method is used
                                to get access of this file*/
let Joi=require("@hapi/joi");

const model=require("../DB Schemas/contactSchema");
const contacts=model.contactModel;

router.post('/contactus',async(req,res)=>{

    let {error}=validationError(req.body);
    if(error){return res.send(error.details[0].message)};
    let newcontacts = new contacts({
        name: req.body.name,
        email:req.body.email,
        message:req.body.message
    });

    let data= await newcontacts.save();
    res.send({message:"THANK YOU!",d:data});

});

function validationError(error){
let schema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    email:Joi.string().min(5).max(50).required().email(),
    message:Joi.string().min(2).max(100).required()
});

return schema.validate(error);

}

module.exports=router;