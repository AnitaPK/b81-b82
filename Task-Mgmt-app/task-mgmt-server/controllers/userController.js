const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')


const register = async (req,res)=>{
    let {name,email, password,contactNumber} = req.body

    try {
        const existingUser =await User.findOne({where:{email:email}})

        if(existingUser){
            return res.status(401).send({msg:"User already exist",success:false})
        }
        const salt =await bcryptjs.genSaltSync(8)
        console.log(salt,"Salt")
        password =await bcryptjs.hashSync(password, salt)
        console.log(password,"HashPassword")
        const newUser = await User.create({name,email,password,contactNumber})
        res.status(201).send({msg:"Successfully Registered",success:true})
        
    } catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

// let existingUser
const login = async (req,res)=>{
    const {email, password} = req.body

    try {
         const existingUser =await User.findOne({where:{email:email}})
            console.log(existingUser)
        if(!existingUser){
            return res.status(401).send({msg:"User does not exist",success:false})
        }

        isPassCorrect = await bcryptjs.compare(password,existingUser.password)

        if(!isPassCorrect){
            return res.status(401).send({msg:"Invalid credentials",success:false})
        }

        res.status(200).send({msg:"Logged in succesfully",success:true})

} catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

const getUserInfo = (req,res) =>{
    try{

        res.status(200).send({loggedUser:"We done for today"})

        } catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

module.exports = {
    register, login, getUserInfo
}
