const User = require("../model/User");




const login = async (req,res)=>{
    const {login,password} = req.body
    const user = await User.findOne({login,password})
    if(user){
        return res.status(200).json(user)
    }
    return res.status(400)

}


module.exports = {login}