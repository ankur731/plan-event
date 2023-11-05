const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const auth = require('../middleware/authMiddleware');


require('dotenv').config();

//console.log(process.env.SECRET_KEY)

router.use(cookieParser());
             
router.post('/user/signup', async (req, res)=>{
       const {firstname, lastname, email, password, phone} = req.body;
       try{
       if(!(firstname && lastname && email && password && phone)){
           res.status(400).send('All fields are compulsory')
       }
       const oldUser = await User.findOne({email});
       if(oldUser){ 
           res.status(401).send('User already exists with this email')
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({
           firstname,
           lastname,
           email,
           phone,
           password: hashedPassword 
       })
       const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY, {expiresIn: "2hr"})   
       user.token = token     
       user.password = undefined
       
       
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        htttpOnly: true 
    }
   return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
    })
       } catch(e){
             res.send(e)
       }


    //    return res.status(201).json({message:"signed up successfully!", user:user, token:token})
    //    } catch(e){
    //        res.send(e)
    //    }
       
})


router.post('/user/login', async(req, res)=>{
    try{
    const {email, password} = req.body;
    //validation 
    if(!(email && password)){
        res.status(400).send('send all data')
    }
    const user = await User.findOne({email}); //returns user
    if(!user){
        return res.json({message: "user does not exist!"})
    }
    const matchPassword = await bcrypt.compare(password, user.password)
    if(!matchPassword){
        return res.status(400).json({message: "Invalid Credentials"})
    }
    const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY, {expiresIn: "2hr"})
    
    user.token = token
    user.password = undefined
    
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        htttpOnly: true 
    }

     return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
    })


    // res.cookie("token", token , {
    //     htttpOnly: true,
    //     secure: true,
    //     signed: true,
    //     maxAge: 3600000,  // 1 hour (in milliseconds)
    // })
     
   // return res.status(201).json({message:"signed in successfully!", user:user, token:token})
} catch(e){
    res.status(500).json({message: "Something went wrong!"})
}
})


router.get('/test',auth, async(req, res)=>{
    res.send("hello world")
})


router.get('/user/logout', (req, res )=>{
    
     res.clearCookie('token');
     res.json({message: 'Logged out successfully.'});
 })


router.post('/user/changepassword', auth, async (req, res)=>{
      
      const {password, newPassword, confirmPassword} = req.body;
      const id = req.user._id;

      if(newPassword !== confirmPassword){
          return res.status(400).json({error: "New password and confirm password do not match!"})
      }
      try{
      const user = await User.findOne({id}); 
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
         return res.status(400).json({error:"current password do no match"})
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      return res.json({ message: "Password updated successfully" });
      } catch (e){
      res.status(500).json({ error: "Internal server error" });
      }
    
})



module.exports = router;



