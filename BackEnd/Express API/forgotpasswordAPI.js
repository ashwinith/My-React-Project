let express = require("express");
let router = express.Router();
let User = require("../DB Schemas/userSchema");
let bcrypt = require("bcrypt");
let Joi = require("@hapi/joi");

router.post("/forgotpasswordAPI/:token", async (req, res) => { // Here we are sending token in URL to match it with the generated token.
    let user = await User.userModel.findOne({
        "resetpasswordtoken": req.params.token,
        "resetpasswordexpires": {
$gt: Date.now()
        }
    });

    if (!user) { return res.status(403).send({ message: "Invalid token or token got expires" }) };
    let { error } = Validationerror(req.body);
    if (error) { return res.send(error.details[0].message) };
    let oldpassword = await bcrypt.compare(req.body.userLogin.userpassword, user.userLogin.userpassword); // Here we are checking whether new password entered is same as old one.
    if (oldpassword) { return res.status(402).send({ message: "New password is same as old password. Please check." }) };
    user.userLogin.userpassword = req.body.userLogin.userpassword;
    user.resetpasswordexpires = undefined;
    user.resetpasswordtoken = undefined;
    let salt = await bcrypt.genSalt(10); // The basic idea for using bcrypt.genSalt is to generate Salt for password which need to encrypted.
    user.userLogin.userpassword = await bcrypt.hash(user.userLogin.userpassword, salt);
    await user.save();
    res.send({ message: "Password updated succesfully." });
});

function Validationerror(error) {
    let Schema = Joi.object({
        userLogin: {
            userpassword: Joi.string().required()
        }
    });
    return Schema.validate(error);
}

module.exports = router;
