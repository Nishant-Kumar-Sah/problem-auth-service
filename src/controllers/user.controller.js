const { UserService } = require('../services')
const { UserRepository } = require('../repository')


const userService = new UserService(new UserRepository());

function pingController(req,res,next) {
    return res.json({message: "Ping Controller is Up"})
}
async function signup(req, res, next) {
    try {
        const user = await userService.signup(req.body)
        return res.status(201).json({
            success:true,
            message: "User created successfully",
            error: {},
            data: user
        })
    }catch(error){
        console.log("Controller error:", error);
    return res.status(500).json({
        success: false,
        message: "User creation failed",
        error: error.message || error,
        data: null
    });

    }

}
module.exports = {
    pingController, 
    signup
}