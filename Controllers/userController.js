const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req,res) => {
    console.log("Inside register function");
    const {username, email, password} = req.body
    console.log(username, email, password);
    try {
        const exisitingUser = await users.findOne({email})
        if (exisitingUser) {
            res.status(406).json("Account already exists !! Please Login..")
        } else {
            //add 
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//login
exports.loginController = async(req,res) => {
    console.log("Inside login Function");
    const {email,password} = req.body
    console.log(email,password);
    try {
        const exisitingUser = await users.findOne({email,password})
        if (exisitingUser) {
            const token = jwt.sign({userId:exisitingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
                user:exisitingUser,
                token
            })
        } else {
            res.status(404).json("Invalid Email or Password !!")            
        }
    } catch (err) {
        res.status(401).json(err)
    }
}