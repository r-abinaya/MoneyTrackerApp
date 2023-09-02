/* eslint-disable no-undef */

const express =require('express');
const bodyParser= require('body-parser');
const app = express();
require('dotenv').config();
const cors =require('cors');
const Transaction =require('./models/Transaction.js');
const mongoose= require('mongoose');

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());


app.get('/api/test',(req,res)=>{
 res.json({body:'test'})
});


app.post('/api/transaction', async (req,res)=>{
    // console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    const {name,description,datetime,price} =req.body;
    const transaction = await Transaction.create({name,description,datetime,price});
    res.json(transaction);

    // let data= req.body;
    // res.send(JSON.stringify(data));
});
app.get('/api/transactions',async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const transactions =await Transaction.find();
    res.json(transactions);
});
   

app.listen(4040,()=>{
    console.log("server started on 4040")
});
// server.listen(4040,'localhost');
// server.on('listening',function(){
//     console.log('Express server started on port %s at %s',server.address().port,server.address().address);
// });
//3p4UunZIOnrdBc1O

