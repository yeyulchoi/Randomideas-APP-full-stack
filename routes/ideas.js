const express = require('express');
const router = express.Router();


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


//get all ideas
router.get('/',(req,res)=>{
    res.json({success:true, data:ideas});
    
})

// get one idea
router.get('/:id',(req,res)=>{
     const idea = ideas.find((idea)=>idea.id === +req.params.id)
     if(!idea){
        return res.status(404).json({success:false, error:'not found'})
     }
    res.json({success:true, data:idea});
    
})

router.post('/',(req,res)=>{
    const idea={
        id:ideas.length+1,
        text:req.body.text,
        tag: req.body.tag,
        username:req.body.username,
        date:new Date().toISOString().slice(0,10)
    
    }
    console.log(idea);
   
    ideas.push(idea)
    res.json(ideas)
    
})   // important the order of res/req in post method.
   
//update
router.put('/:id',(req,res)=>{
    const idea = ideas.find((idea)=>idea.id === +req.params.id)
    if(!idea){
       return res.status(404).json({success:false, error:'not found'})
    }

    idea.text=req.body.text || idea.text;
    idea.tag= req.body.tag || idea.tag;
    res.json({success:true, data:idea});
   
})

//delete  idea
router.delete('/:id',(req,res)=>{
    const idea = ideas.find((idea)=>idea.id === +req.params.id)
    if(!idea){
       return res.status(404).json({success:false, error:'not found'})
    }

    const index=ideas.indexOf(idea)
    ideas.splice(index,1)
    res.json({success:true, data:idea});
   
})

module.exports = router;