const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user')
const session = require('express-session');



const cors = require('cors');

const app = express();





const categoryRoutes = require('./routes/category');
const userRoutes = require('./routes/user');

//Database connection with mongodb
const MONGO_URI = "mongodb+srv://demo1234:demo1234@cluster0.664rurv.mongodb.net/admin-panel?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI).then(() =>{
    console.log("DATABASE CONNECTED!!!")
})          
.catch(err => { 
    console.log("OH NO CONNECTION ERROR!!!")
    console.log(err)
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    "origin": "*",
     credentials: true,
     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
  }));




app.use('/',categoryRoutes);
app.use('/',userRoutes);

// app.use(
//     bodyParser.urlencoded({
//       extended: true
//     })
//   )





app.listen(8000, ()=>{
    console.log("app is listening on port 8000");
})