const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const authToken = require('../middleware/auth'); 
const User = require('../models/user');

require('dotenv').config();
     
router.use(cookieParser());



//created admin directly in db
router.post('/admin/signin', async(req,res)=>{

    const {username, password} = req.body; 
    
    try{
        
        if(!(username && password)){
            res.status(400).send('send all data')
        }
        const admin = await Admin.findOne({username}); //returns user
        
        if(!admin){
            return res.json({message: "user does not exist!"})
        }
        const matchPassword = await bcrypt.compare(password, admin.password)
        
        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const token = jwt.sign({username: admin.username, id: admin._id}, process.env.SECRET_KEY, {expiresIn: "1h"})
        
        admin.token = token  
        admin.password = undefined
        
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            htttpOnly: true 
        }
        
        return res.status(200).cookie("jwt", token, options).json({
            success: true,
            token,
            admin
        })
       //  console.log(req.cookies.jwt)
    //     const hashedPassword = await bcrypt.hash(password, 10);
       
    //     try{
    //     const admin = new Admin({
    //            username,
    //            password: hashedPassword
    //     })

    //     await admin.save();    
    //     res.send(admin)
    // }
    // catch(e){
    //     res.send(e)
    // } 
    } catch (e){ 
         res.send(e); 
    }
    
})


router.post('/admin/changepassword', authToken, async (req, res)=>{
      
    const {password, newPassword, confirmPassword} = req.body;
    const id = req.admin._id;

  //  console.log(id)
    if(newPassword !== confirmPassword){
        return res.status(400).json({error: "New password and confirm password do not match!"})
    }
    try{
    const admin = await Admin.findOne({id}); 
    const isMatch = await bcrypt.compare(password, admin.password) 

    if(!isMatch){
       return res.status(400).json({error:"current password do no match"})
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword; 
  //  admin.password= newPassword;
   // console.log(admin.password)
     admin.save()
    return res.json({ message: "Password updated successfully" });
    } catch (e){
    res.status(500).json({ error: "Internal server error" });
    }
  
})


router.post('/createuser', authToken, async(req, res)=>{
         const {firstname, lastname, email, password, phone} = req.body;
         try{
             const hashedPassword = await bcrypt.hash(password, 10);
             const user = new User({
                 firstname,
                 lastname,
                 email,
                 password: hashedPassword,
                 phone
             })  
             await user.save();
             res.status(200).json({message: "user created successfully!"})
         }catch(e){
             res.send(e)
         }
})


router.get('/getuserdetails',authToken, async (req, res)=>{
    try{
    const users = await User.find({})
    res.status(200).send(users)
    }
    catch(e){    
        console.log("No user found!")
    }
})


router.get('/getuserdetails/:id',authToken, async(req, res)=>{
    const {id} = req.params;
    try{
       const user = await User.findOne(id)
       if(!user){
        return res.status(404).send()
   }
   res.send(user)
    } catch(e){
       res.send("user doesn't exist")
    }
})



router.get('/admin/logout', (req, res )=>{
    
    res.clearCookie('jwt'); 
    res.json({message: 'Logged out successfully.'});
})


module.exports = router