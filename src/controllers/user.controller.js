function pingController(req,res,next) {
    return res.json({message: "Ping Controller is Up"})
}

module.exports = {
    pingController
}