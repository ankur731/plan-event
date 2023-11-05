const express = require('express');
const router = express.Router();
const multer = require('multer');
const Subcategory = require('../models/subcategory')
const Category = require('../models/category')
const authToken = require('../middleware/auth');
const Admin = require('../models/admin')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
//const category = require('../controllers/category');

              
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

             

// //create category
router.post('/addcategory',upload.single('image'),  async(req, res)=>{
        const {categoryName, text} = req.body;
        const image = req.file.filename
     //   console.log(req.body)
     //   console.log(req.file)
        try{
        const newcat = new Category({
                 categoryName,
                 image,
                 text 
            })
        
        
        const category = await newcat.save();
        
        console.log(category)
        res.status(201).json(category);
        
        }catch(e){
            res.send(e)
        } 
})  
               


router.post('/addsubcategories', async (req, res) => {
  try {
      const { subcategoryName, categoryId } = req.body;
  
      const subcategory = await Subcategory.create({
        subcategoryName,
        category: categoryId,
      });
      
      // Update Category's subcategories array
      await Category.findByIdAndUpdate(categoryId, {
        $push: { subcategories: subcategory._id },
      });
      res.status(201).json(subcategory);
      
  } catch (error) {  
    console.error(error); 
    res.status(500).json({ error: 'Server Error' });
  }
});


//get all categories
router.get('/getcategory', async(req, res)=>{
 
          const category = await Category.find().populate('subcategories')
          
          res.send(category);
          
})




//get categories by id
router.get('/getcategories/:id', async(req, res)=>{
 
  const {id} = req.params;
  const category = await Category.findById(id).populate('subcategories')
  res.send(category)
  
})


router.put('/getcategory/:id', async(req, res)=>{
  const {id} = req.params;
  const updatedData = req.body 
  console.log(updatedData)
  
  try{
   const category= await Category.findByIdAndUpdate(id, updatedData, {new: true}); 
   
   if (!category) {
      return res.status(404).json({ error: 'Item not found' });}
   else{
       res.json(category);
   }
  }catch(e){
   res.status(500).json({ error: "An error occurred" });
  }
})





router.delete('/getcategory/:id', authToken, async(req, res)=>{
  try{
         const {password} = req.body;  
          const id = req.admin.id;  
           //console.log(id) 
          const admin = await Admin.findById(id); 
         // console.log(admin)
         
          const isMatch = await bcrypt.compare(password, admin.password);
          console.log(isMatch)
          if(!isMatch){
              return res.status(400).json({
                  message: "Password Incorrect!Please enter correct password."
              })
          }  
          
            const category = await Category.findById(req.params.id)
            await Category.findByIdAndDelete(req.params.id)
        
          return res.status(400).json({message: "category deleted"}); 
       }catch(e){
             res.status(500).json({
                 error: "something went wrong"
             })
            
       }              
       
}) 



router.get('/subcategories', async(req, res)=>{

  const subcategories = await Subcategory.find({})
   res.send(subcategories)
})




router.get('/subcategories/:id', async(req, res)=>{

  const subcategories = await Subcategory.findById(req.params.id)
  res.send(subcategories);

})



router.put('/subcategories/:id', async(req, res)=>{
     
  const {id} = req.params;
  const {subcategoryName} = req.body;           

  try{
  
   const subcategory = await Subcategory.findByIdAndUpdate(id, {subcategoryName}, {new: true} );
   const ref = subcategory.category //returns id of category stored in subcategory field

   
    // Update Subcategory reference in Category
    const category = await Category.findOne({ subcategories: id });

    category.subcategories.forEach((subcategory, index) => {
      if (subcategory._id.equals(id)) {
        category.subcategories[index].subcategoryName = subcategoryName;
      }
    });

   await category.save();
  
    
   return res.status(400).json({
     message: "subcategory updated",
     subcategory 
 }); 
   
  }catch(e){
    
    res.status(500).send(e);

  }
  
})




router.delete('/subcategories/:id', async(req, res)=>{
     
    const {id} = req.params;  
     try{

      const subcategory = await Subcategory.findById(id);
      const subcategoryId = subcategory._id;
      const categoryId = subcategory.category;
     //update category to remove subcategory reference
      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $pull: { subcategories: subcategoryId } },
        { new: true }
      ) 
      await Subcategory.findByIdAndDelete(id);
      return res.status(400).json({message: "subcategory deleted"}); 
      
     }catch(e){

       res.status(500).send(e);
     }
     
}) 



module.exports = router; 










