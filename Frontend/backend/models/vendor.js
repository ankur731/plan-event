const mongoose = require('mongoose')

const {Schema} = mongoose;

const vendorSchema = new Schema({
            
            categorySelected:{
            type: String,
            },
            planSelected:{
             type: String,
             
            },
            categoryName:{
             type: String,
            
            },
            subcategoryName: {
                type: String,
                required: true
            },
            companyName:{
                type: String,
                required: true
            },
            websiteURL:{
                type: String
            },
            instaLink:{
                type: String
            },
            fbLink:{
                type: String
            },
            gstNumber: {    
                type: Number
            },
            partnerName: {
                type: String,
                required: true 
            },
            address:{
                type: String,
                required: true
            },
            
            pincode: {
                type: Number,
                required: true
            }, 

            phoneNumber: {
                type: Number,
                required: true
            },
            whatsappNumber:{
                type: Number,
                required: true
            },
            city:{
                type: String,
                required: true
            },
            email:{
                type: String,
                required: true,
                trim: true,
                unique: true,
                lowercase: true,
            },
            password: {
                type: String,
                required: true
            },
            servicesOffered:{
                type: String,
                required: true
            },
            startingPrice: {
                type: Number,
                required: true
            },
            maximumPrice:{
                type: Number,
                required: true
            },    
            additionalInfo:{
                type: String,
            },
            image1: {
                type: String,
              //  required: true
            },
            image2:{
                type: String,
             //  required: true
            },
            image3:{
                type: String,
              //  required: true
            },
            image4:{
                type: String,
              //  required: true
            },
            video:{
                type: String,
               // required: true
            },
            approved: {
                type: Boolean,
              //  required: true,
                default: false
            },
            category: {
                type: Schema.Types.ObjectId,
                ref: 'category'
            },
            subcategory:
                {
                    type: Schema.Types.ObjectId,
                    ref: 'subcategory'
                }
            
})

const Vendor = mongoose.model("vendor", vendorSchema);
module.exports = Vendor  
