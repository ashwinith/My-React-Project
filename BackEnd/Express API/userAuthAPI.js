let express = require("express");
let router = express.Router();
let bcrypt = require("bcrypt");


let User = require("../DB Schemas/userSchema");
let Joi = require("@hapi/joi");
let userAuthentication = require("../Express API/Middleware/userAuthentication");
router.get("/me", auth, async (req, res) => {
    let data = await User.userModel.findById(req.user._id).select("-userLogin.userpassword -isAdmin");
    res.send(data); 
});



router.post("/userAuthentication", async (req, res) => {
    let { error } = AuthValidation(req.body);
    if (error) { return res.send(error.details[0].message) };
    let user = await User.userModel.findOne({ "userLogin.userEmail": req.body.userLogin.userEmail });
    if (!user) { return res.status(403).send({ message: "Invalid email Id" }) };
    
    let password = await bcrypt.compare(req.body.userLogin.userpassword, user.userLogin.userpassword);
    if (!password) { return res.status(403).send({ message: "Invalid password" }) };
    
    let token = user.UserToken();
    res.header("x-auth-token", token).send({ message: "Loggin successful" , token: token});
});

function AuthValidation(error) {
    let Schema = Joi.object({
        userLogin: {
            userEmail: Joi.string().required().email(),
            userpassword: Joi.string().required()
        }
    });
    return Schema.validate(error);
};

module.exports = router;