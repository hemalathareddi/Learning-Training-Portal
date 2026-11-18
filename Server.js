const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const multer = require('multer');

const bcrypt = require('bcrypt');



const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'))




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${Date.now()}_ ${file. originalname}`)
  }
})

const upload = multer({ storage: storage })


let userSchema = new mongoose.Schema({

  name:String,
  gender:String,
  marredStatus:String,
  profile:String,
  number:Number,
  city:String,
  state:String,
  email:String,
  password:String,
  rePassword:String,


});

let userDetails = new mongoose.model("pulseStudent",userSchema);



let connectToMDB = async ()=>{
  try {
    await mongoose.connect(process.env.dbPath);
    console.log("Successfully connected to 🍃");
  } catch (error) {
    console.log("Unable to connect the 🍃");
  }
}

app.post("/signup",upload.single("profile"), async(req,res)=>{

  console.log(req.body);
  console.log(req.file); 

  let hashedPassword =await bcrypt.hash(req.body.password,10);
  console.log(hashedPassword);
  let hashedRePassword =await bcrypt.hash(req.body.rePassword,10);
  console.log(hashedRePassword);

  let studentDetails = await userDetails.find().and({email:req.body.email});
  
  if(studentDetails.length >0){
    res.json({status:"FAIL",msg:"User already exists"});

  }else{


    try {

      let newData = new userDetails({
  
        name:req.body.name,
        gender:req.body.gender,
        marredStatus:req.body.married,
        profile:req.file.path,
        number:req.body.number,
        city:req.body.city,
        state:req.body.state,
        email:req.body.email,
        password:hashedPassword,
        rePassword:hashedRePassword,  

     
    });
    
     await userDetails.insertMany(newData);
  
     res.json({status:"Success",msg:"successfully created & send data to 🍃"});
     
    
  } catch (error) {
    res.json({status:"failed",msg:"cann't send data to 🍃"});
    
  }

}

});

app.post("/login", upload.none(), async(req,res)=>{

  
  console.log(req.body);

  let studentDetails = await userDetails.find().and({email:req.body.email});
  
  if(studentDetails.length == 0){
    res.json({status:"FAiL",msg:"User doesn't exist"});
  }else{ 
  
    let result = await bcrypt.compare(req.body.password,studentDetails[0].password);
    console.log(result);
  
    if(result == true){
      res.json({status:"Success",msg:"SuccessFully Login ",data:studentDetails[0]});
    }else{
      res.json({status:"FAIL",msg:"Incorrect password"});
    }
  }
  
  
  
  
    console.log(studentDetails);

});

app.listen(process.env.port,()=>{

  console.log('Server is running🔥');

})

connectToMDB();