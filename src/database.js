const express=require('express');
const exp=express();
const mongodb=require('mongodb');
const bodyParser=require('body-parser');
const cors=require("cors");
const url="mongodb://localhost:27017"
exp.use(bodyParser.json())
exp.use(cors());
exp.get("/show",async (req,res)=>{
    
    try{
        let client=await mongodb.connect(url);
        let db=await client.db("imdb");
        let data=await db.collection("movies").find().toArray();
        res.send(data);
    }catch(err){
        console.log(err);
    }

})
exp.get("/show/:id",async (req,res)=>{
    console.log(req.params.id);
    try{
        let client=await mongodb.connect(url);
        let db=client.db("imdb");
        let data1=await db.collection("movies").findOne({_id:req.params.id});
        console.log(data1);
        res.send(data1);


    }catch(err){
        res.json({message:"err"})
    }
})
exp.post("/post",async (req,res)=>{
    console.log(req.body);
    res.send("DONE!");
    try{
        let client=await mongodb.connect(url);
        let db=client.db("imdb");
        db.collection("movies").insertOne({
            "name":req.body.name,
            "director":req.body.director,
            "year":req.body.year,
            "_id":req.body.id,
            "cast":req.body.cast
        });
        client.close(); 

    }catch(err){
        console.log(err);
    }
})
exp.listen(4040,()=>{
    console.log("listening");
})