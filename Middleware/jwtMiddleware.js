const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) => {
    console.log("Inside JWTMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if (token) {
        try {
            //verify
            const jwtResponse = jwt.verify(token,process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        } catch (err) {
            res.status(401).json("Invalid TOken..Please Login !!")
        }
    } else {
        res.status(404).json("Missing Token !!")
    }
}

module.exports = jwtMiddleware