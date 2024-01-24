const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
const productschema=new mongoose.Schema({
    model:{
        type: String,
       
    },
    brand:{
        type: String,
   
    },
    price:{
        type:Number,
   
    }
})
module.exports=mongoose.model("product",productschema);


