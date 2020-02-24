let express=require("express");
let router=express.Router();
let crypto=require("crypto"); // Crypto is an inbuilt module that is used to generate temporary token in string format
let nodemailer=require("nodemailer");
let User=require("../DB Schemas/userSchema");


router.post("/nodemailer",async(req,res)=>{

    let user=User.userModel.findOne({"userLogin.userEmail":req.body.userLogin.userEmail});
    if(!user){return res.status(403).send({message:"Invalid Email"})};

    let token=crypto.randomBytes(32).toString("hex");
    user.resetpasswordtoken=token;
    user.resetpasswordexpires= Date.now()+3600000; // Time of 1hr and after that token will expire

    await user.save();

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ashwinith@gmail.com', // generated ethereal user
            pass: '123456' // generated ethereal password
        }
    });
    if (!transporter) res.status(401).send({
        message: 'Something went wrong'
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Ashwini:" <ashwinith@gmail.com>', // sender address
        to: user.userLogin.userEmail, // list of receivers
        subject: 'Reset Your Password', // Subject line:smile:
        text: 'open this link to change your password http://localhost:4800/forgotpasswordAPI/' + token // plain text body
    };

     // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    res.send({ message: "PLEASE CHECK YOUR MAIL BOX", d: user });


});

module.exports=router;

