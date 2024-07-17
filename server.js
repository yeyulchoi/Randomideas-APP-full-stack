const express = require('express')
const app =express();
const port =2000;


const ideas=[
{
    id:1,
    text:' simply dummy text of the printing and typesetting industry',
    tag:'Technology',
    username:'Jannykim',
    date:'2024-07-02'
},
{
    id:2,
    text:'when an unknown printer took a galley of type and scrambled it',
    tag:'Inventions',
    username:'MarkBrown',
    date:'2024-07-07'
},
{
    id:3,
    text:'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    tag:'Tools',
    username:'O-ren',
    date:'2024-07-09'
},
{
    id:4,
    text:'here are many variations of passages of Lorem Ipsum available',
    tag:'Framework',
    username:'Delmont',
    date:'2024-07-10'
}]




app.get('/',(req,res)=>{
    res.json({message:'Welcome to the RandomIdeas API'});
})

//get all ideas
app.get('/api/ideas',(req,res)=>{
    res.json({success:true, data:ideas});
    
})

//get one idea
app.get('/api/ideas/:id',(req,res)=>{
     const idea = ideas.find((idea)=>idea.id === +req.params.id)
     if(!idea){
        return res.status(404).json({success:false, error:'not found'})
     }
    res.json({success:true, data:idea});
    
})
   

app.listen(port,()=>{console.log(`the app is running on ${port}`)})