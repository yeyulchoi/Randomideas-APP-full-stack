const express = require('express')
const app =express();
require('dotenv').config()
const port=process.env.PORT;

// const port =2000;

//body parser middleware
app.use(express.json()) // send raw json to the server
app.use(express.urlencoded({extended:false})) //parser raw to client not-in-depth parser


app.get('/',(req,res)=>{
    res.json({message:'Welcome to the RandomIdeas API'});
})


const ideasRouter = require('./routes/ideas');
app.use('/api/ideas',ideasRouter);

app.listen(port,()=>{console.log(`the app is running on ${port}`)})