
const express = require('express')
const jwt = require("jsonwebtoken");
const zod = require("zod")
const app = express();

const jwtpassword="secret";


// question 1

//Write a function that takes in 
//a username and password and returns 
//a JWT token with the username encoded.
// Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// question 2
//Write a function that takes
// a jwt as input and returns
// true if the jwt can be DECODED (not verified). Return false otherwise

app.use(express.json());

function validation(email,password){

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6)

const emailresponse=emailSchema.safeParse(email);
const passwordresponse=passwordSchema.safeParse(password);

if(!emailresponse.success|| !passwordresponse.success){
    return null;;
} 
var token=jwt.sign({email:email},jwtpassword);

  return token;
  
  






}


app.post("/login",function(req,res){


const email=req.body.email;
const password=req.body.password;

  const p=validation(email,password);
  
  res.status(404).json({p})
  

})

app.get("/decode",function(req,res){

  const token=req.headers.authorization;
  let ans;
  
    const decoded=jwt.decode(token)
if(decoded){
  ans=true;
}

  
  else{
    ans=false;


  }
  res.json({ans
  });



})


app.listen(4000);
console.log("should run")
