const mongoose = require('mongoose');
const {Schema} = mongoose;
const Subcategory = require('./subcategory')

const CategorySchema = new Schema({

    categoryName:{
        type: String,
        required: true 
     },
     image:{
         type: String
     },
     text: {
         type: String
     },             
     subcategories:[{
         type: Schema.Types.ObjectID,
         ref: 'subcategory'
     }]

})


//delete subcategories in category model
CategorySchema.post('findOneAndDelete', async function(doc){
    
   if(doc){
       await Subcategory.deleteMany({
              _id:{
               $in: doc.subcategories
           }
       })
   }
   console.log("DELETED!!!!");
}) 






const Category = mongoose.model("category", CategorySchema);
module.exports = Category;  