const express=require('express');
const User=require('./db/User');
require("./db/config"); 
const app=express();
const cors=require('cors')
app.use(express.json())
app.use(cors());


app.post('/register',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    console.log(result)
    result=result.toObject();
    delete result.password
    res.send(result)
 
})

app.post("/login",async(req,resp)=>{
    if(req.body.email && req.body.password){

        let user=await User.findOne(req.body).select("-password");
        if(user)
        {
            resp.send(user)
        }else{
            resp.send({result:"no user found"})
        }

    }
    else
    {
        resp.send({result:" both name and password needed"})
    }
    
})
app.listen(5000);
