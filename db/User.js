const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
const userschema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})
module.exports=mongoose.model("users",userschema);


