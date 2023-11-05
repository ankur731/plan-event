const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Vendor = require('../models/vendor');
const cookieParser = require('cookie-parser');
const authToken = require('../middleware/authVendor');


require('dotenv').config();

router.use(cookieParser());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {   
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}=${file.originalname}`);
    }
})

const upload = multer({
    
    storage: storage ,
  //    limits:{
  //        fileSize: 10000000 //10MB
  //    },
     fileFilter(req, file, cb){
          if(!file.originalname.match(/\.(jpg|jpeg|png|mp4|MPEG-4|mkv)$/)){
             return cb(new Error('Please upload a file'))
          }
          cb(undefined,true)
     }
    
}) 




// vendor routes - admin panel
router.post('/vendor/upload', upload.fields([
    { name: "image1", maxCount: 1},
    { name: "image2", maxCount: 1},
    { name: "image3", maxCount: 1},
    { name: "image4", maxCount: 1},
    { name: "video", maxCount: 1},
]),        
async(req,res) =>{
   
    try{

        const {planSelected, categorySelected, additionalInfo, categoryName , subcategoryName, companyName, websiteURL, instaLink, fbLink, gstNumber,partnerName, address, pincode,
            phoneNumber, whatsappNumber,city, email, password,confirmPassword, servicesOffered, startingPrice, maximumPrice, approved} = req.body;
               
            
            const image1= req.files.image1[0].filename;
            const image2= req.files.image2[0].filename;
            const image3= req.files.image3[0].filename;
            const image4= req.files.image4[0].filename;
            const video= req.files.video[0].filename;   
            
            
            const oldVendor = await Vendor.findOne({email});
            
            if(oldVendor){
                return res.status(401).send('Vendor already registered with this email')
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const vendor = new Vendor({
                planSelected, categorySelected, additionalInfo, categoryName , subcategoryName,
                subcategoryName, companyName, websiteURL, instaLink,fbLink, gstNumber,partnerName,
                address, pincode, phoneNumber, whatsappNumber, city, email, 
                password: hashedPassword, 
                servicesOffered,startingPrice, maximumPrice,approved,
                image1,
                image2,
                image3,
                image4,
                video
            });      
           // console.log(vendor);
            const token = jwt.sign({email: vendor.email, id: vendor._id}, process.env.SECRET_KEY, {expiresIn: "2hr"}) 
            vendor.token = token  
            vendor.password = hashedPassword;
            
            await vendor.save(); 
            
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                htttpOnly: true 
            }
            
            return res.status(200).cookie("token", token, options).json({
                success: true,
                message: "Vendor Registered successfully!",
                token,
                vendor
            })
            


    } catch(e){

   res.send(e)
    
    } 
}
)



router.get('/vendor/upload', async (req, res)=>{
    const vendors = await Vendor.find({});
    res.send(vendors);
})



router.get('/vendor/filter', async(req, res)=>{
    try{
        const filter = req.query.categoryName
     //   console.log(filter)
      //  const count = await Vendor.find({categoryName: filter}).count() 
        const vendors = await Vendor.find({
            categoryName: filter
        })
        //  res.send({
        //      vendors, 
        //      count 
        //  });
        res.send(vendors)  
    }catch(e){
        res.send(e);
    }

})


router.get('/vendor/:id',async(req, res)=>{
    
    
    try{
        const vendor= await Vendor.findById(req.params.id);
      //  console.log(category);
         if(!vendor){
               return res.status(404).send()
          }
          res.send(vendor)
      }catch(e){
        res.status(500).send()
      }
})



router.get('/filterdata', async (req, res)=>{
    
    try{
      
      //  const category =await Category.find({approved: false})
        const category =await Vendor.find({approved: false})

       // console.log(category);
        if (category.length === 0) {
            return res.status(404).send();
          }
        //  if(!category){
        //        return res.status(404).send()
        //   }
        res.send(category) 
      }catch(e){
        
         res.status(500).send(e)
    
      }                   
})


router.delete('/vendor/:id', async(req,res)=>{
    const {id}= req.params;
    try{
        const vendor= await Vendor.findByIdAndDelete(id);
     //   console.log(category);
        return res.send({message: "vendor deleted"})
    }catch(e){
        res.send({message: "vendor not found!"});
    }
})


//update vendor data
router.patch('/vendor/:id',  upload.fields([
    { name: "image1", maxCount: 1},
    { name: "image2", maxCount: 1},
    { name: "image3", maxCount: 1},
    { name: "image4", maxCount: 1},
    { name: "video",  maxCount: 1},
]),   async(req,res)=>{

    
    const {id} = req.params;
    const updatedData = req.body;


    console.log(updatedData)
     
    //if image uploaded
    if(req.files.image1) {
        const image1 = req.files.image1[0].filename;
        updatedData.image1 = image1
    }
     
    if(req.files.image2) {
        const image1 = req.files.image2[0].filename;
        updatedData.image2 = image2
    }
     
    if(req.files.image3) {
        const image3 = req.files.image3[0].filename;
        updatedData.image3 = image3
    }
     
    if(req.files.image4) {
        const image4 = req.files.image4[0].filename;
        updatedData.image4 = image4
    }
     
    if(req.files.video) {
        const image1 = req.files.video[0].filename;
        updatedData.video = video
    }

    try{
        const vendor= await Vendor.findByIdAndUpdate(id, updatedData, {new: true}); 
        
        if (!vendor) {
           return res.status(404).json({ error: 'Item not found' });}
        else{
            res.json(vendor);
        }
    } catch(e){
        res.status(500).json({ error: "An error occurred" });
    }
})





//vendor panel routes 



//Registration Form
router.post('/vendor/signup', upload.fields([
    { name: "image1", maxCount: 1},
    { name: "image2", maxCount: 1},
    { name: "image3", maxCount: 1},
    { name: "image4", maxCount: 1},
    { name: "video",  maxCount: 1},
]),       
async(req,res) =>{
   // console.log(req.body);
   // console.log(req.files);
    try{    
       
    const {subcategoryName, companyName, websiteURL, instaLink, fbLink, gstNumber,partnerName, address, pincode,
    phoneNumber, whatsappNumber,city, email, password,confirmPassword, servicesOffered, startingPrice, maximumPrice } = req.body;
    
    //console.log(req.body);
    const image1= req.files.image1[0].filename;
    const image2= req.files.image2[0].filename;
    const image3= req.files.image3[0].filename;
    const image4= req.files.image4[0].filename;
    const video= req.files.video[0].filename;   
    
    const oldVendor = await Vendor.findOne({email});
    if(oldVendor){
        return res.status(401).send('Vendor already registered with this email')
    }
    
    if(password !== confirmPassword){
        return res.status(400).json({error: "password and confirm password do not match!"})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const vendor = new Vendor({
        subcategoryName, companyName, websiteURL, instaLink,fbLink, gstNumber,partnerName,
        address, pincode, phoneNumber, whatsappNumber, city, email, 
        password: hashedPassword, 
        confirmPassword,
        servicesOffered,startingPrice, maximumPrice,
        image1,
        image2,
        image3,
        image4,
        video
    }); 
   // console.log(vendor);
    const token = jwt.sign({email: vendor.email, id: vendor._id}, process.env.SECRET_KEY, {expiresIn: "2hr"}) 
    vendor.token = token  
    vendor.password = hashedPassword;
    
    await vendor.save(); 
    
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        htttpOnly: true 
    }
    
    return res.status(200).cookie("newToken", token, options).json({
        success: true,
        message: "Vendor Registered successfully!",
        token,
        vendor
    })
    
    } catch(e){
      //res.send({message: "An error occurred!", error: e})
      res.send(e)
    } 
}
)



router.post('/vendor/login', async(req, res)=>{
    const {email, password} = req.body;
    
    try{     
        if(!(email && password)){
            res.status(400).send('send all data')
        }
        const vendor = await Vendor.findOne({email}); //returns vendor
    
        if(!vendor){
            return res.json({message: "vendor does not exist!"})
        }
        const matchPassword = await bcrypt.compare(password, vendor.password)
        
        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const token = jwt.sign({email: vendor.email, id: vendor._id}, process.env.SECRET_KEY, {expiresIn: "1h"})
        
        vendor.token = token  
        vendor.password = undefined
        
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            htttpOnly: true 
        }
        
        return res.status(200).cookie("newToken", token, options).json({
            message: "vendor logged in successfully",
            token,
            vendor
        })
       
    } catch(e){
          res.send(e)
    }
})




router.post('/vendor/logout', (req, res)=>{
    res.clearCookie('newToken'); 
    res.json({message: 'Logged out successfully.'});
})


router.get('/getdetails', authToken , async(req, res)=>{
    
   const id = req.vendor.id;
    console.log(id)
    try{
        const vendor = await Vendor.findById(id);
        res.send(vendor);
    } catch (e){
        res.send(e)
    }
    
})


module.exports = router;