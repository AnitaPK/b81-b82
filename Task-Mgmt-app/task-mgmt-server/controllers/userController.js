const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const register = async (req,res)=>{
    console.log(req.body)
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
            // console.log(existingUser)
        if(!existingUser){
            return res.status(401).send({msg:"User does not exist",success:false})
        }

        isPassCorrect = await bcryptjs.compare(password,existingUser.password)

        if(!isPassCorrect){
            return res.status(401).send({msg:"Invalid credentials",success:false})
        }
        const id = existingUser.id 
        const role = existingUser.role
        const token = jwt.sign({id:id,role:role}, process.env.SECRET_KEY, {expiresIn:"2h"})
        res.status(200).send({msg:"Logged in succesfully",success:true, token:token})

} catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

const getUserInfo = async(req,res) =>{
    try{
        console.log("************", req.user)
        const loggedUser =  await User.findByPk(req.user.id,{
            attributes:{exclude:["password", "createdAt","updatedAt"]}
        })

        res.status(200).send({loggedUser:loggedUser,success:true})

        } catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

const getAllUsers = async(req,res)=>{
     try{
        const allUsers =  await User.findAll()

        res.status(200).send({allUsers:allUsers,success:true})

        } catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

module.exports = {
    register, login, getUserInfo, getAllUsers
}
