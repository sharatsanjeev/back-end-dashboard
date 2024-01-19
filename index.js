const express=require('express');
const User=require('./db/User');
require("./db/config"); 
const app=express();
app.use(express.json())

app.post('/register',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result)
 
})
app.listen(5000);
