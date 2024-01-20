const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
const userschema=new mongoose.Schema({
    name:{
        type: String,
       
    },
    email:{
        type: String,
   
    },
    password:{
        type: String,
   
    }
})
module.exports=mongoose.model("users",userschema);


