const express=require("express");
//You have to create a middleware for logging the number of errors on a server
const app=express();


var errorcount=0;

app.get("/login",function(req,res){

  console.log(errorcount) 
throw new Error("some error")


 // res.status(200).json({ msg: 'created dummy user' });







})
//app.get('/errorcount',function(req,res){

 //// res.status(200).json({errorcount})
//})


app.use(function(err,req,res,next){
  
  errorcount+=1;
 

  res.status(404).send({})



})
console.log("happy")
app.listen(3000)