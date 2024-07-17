const express = require('express')
const app =express();

const port =2000;




app.get('/',(req,res)=>{
    res.json({message:'Welcome to the RandomIdeas API'});
})


const ideasRouter = require('./routes/ideas');
app.use('/api/ideas',ideasRouter);

app.listen(port,()=>{console.log(`the app is running on ${port}`)})