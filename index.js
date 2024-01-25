const express = require('express');
const User = require('./db/User');
const Product = require('./db/Product')
require("./db/config");
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors());


app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    console.log(result)
    result = result.toObject();
    delete result.password
    res.send(result)

})

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {

        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "no user found" })
        }

    }
    else {
        resp.send({ result: " both name and password needed" })
    }

})


app.post("/product", async (req, resp) => {
    let product = new Product(req.body)
    let result = await product.save();
    resp.send(result)
})

app.get("/product", async (req, resp) => {
    let result = await Product.find();
    if (result.length > 0) {
        resp.send(result);
    } else {
        resp.send({relust:"no response"});
    }
});


app.delete('/product/:id',async(req,resp)=>{
    let result=await Product.deleteOne({_id:req.params.id});
    resp.send(result)

})


app.listen(5000);

