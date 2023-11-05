const mongoose = require('mongoose');
const {Schema} = mongoose;



const subcategorySchema = new Schema({

    subcategoryName: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
    
})            



const Subcategory = mongoose.model("subcategory", subcategorySchema);
module.exports = Subcategory





