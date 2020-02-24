let mongoose=require("mongoose");

let usercartSchema=new mongoose.Schema({

    
    cart: [
        {
            id: { type: mongoose.Schema.Types.ObjectId },
            product: { type: String},
            quantity: { type: Number, default: 1 },
            price: {type:Number},
            subtotal: {type:Number},
            grosstotal:{type:Number}
        }
    ],
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date }

});

let usercartModel=mongoose.model("usecartDetails",usercartSchema);

module.exports=usercartModel;