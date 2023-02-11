const user = require("../models/userModel")

exports.signup = async(req, res) =>{
    try{
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confrimPassword: req.body.confrimPassword,
        })

        res.status(200).json({
            status: "Fail",
            data: {
                user:newUser,
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: "Fail",
            message: "User Could not be created"
        })
    }
};