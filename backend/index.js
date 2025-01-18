const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const exp = require("constants");
const e = require("express");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose.connect("mongodb+srv://sasanthi:Sasanthi0920@cluster0.860ue.mongodb.net/gui")
.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection error:", error));

//API Creation
app.get("/",(req,res)=>
{
  res.send("Express App is running");
})

//Image Storage Engine
const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage:storage,
  limits: { fileSize: 5 * 1024 * 1024 }
})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'));

app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

//Schema for Creating Recipes
const Recipe = mongoose.model("Recipe",{
  id:{
    type:Number,
    required:true,
    unique:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  ingredients:{
    type:String,
    required:true,
  },
  instructions:{
    type:String,
    required:true,
  },
  favourite:{
    type:Boolean,
    default:false,
  }

}) 

app.post('/addrecipe',async(req,res)=>{
  let recipes = await Recipe.find({});
  let id;
  if(recipes.length>0)
  {
    let last_recipe_array=recipes.slice(-1);
    let last_recipe=last_recipe_array[0];
    id=last_recipe.id+1;
  }
  else{
    id=1;
  }
  const newRecipe = new Recipe({
    id:id,
    name:req.body.name,
    image:req.body.image,
    ingredients:req.body.ingredients,
    instructions:req.body.instructions,
  });
  console.log(newRecipe);
  await newRecipe.save();
  console.log("Recipe Added");
  res.json({
    success:true,
    name:req.body.name,
  })

})



//Creating API for Adding Recipes to Favourites
app.post('/addtofavourites',async(req,res)=>{
  try{
    const{id}=req.body;
    let recipe=await Recipe.findOne({id});

    if(!recipe){
      return res.status(404).json({success:false,error:"Recipe not found"});
    }
    recipe.favourite=true;
    await recipe.save();
    res.json({success:true,message:"Recipe added to my favourites"});

  }
  catch(error){
    res.status(500).json({success:false,error:"There was an error"});
  }

})

//Creating API for getting Favourite Recipes
app.get('/myfavourites',async (req,res)=>{
  try{
    let favourites = await Recipe.find({favourite:true});
    console.log("All Favourite Recipes Fetched Successfully")
    res.json(favourites);
  }
  catch(error){
    res.status(500).json({success:false,error:"There was an error"});
  }
})

//Creating API for Deleting Recipes from Favourites
app.post('/deletefavorite',async(req,res)=>{
  try{
    const{id}=req.body;
    let recipe = await Recipe.findOne({id});

    if(!recipe){
      return res.status(404).json({success:false,error:"Recipe not found"});
    }

    recipe.favourite=false;
    await recipe.save();
    res.json({success:true,message:"Recipe removed from favourites"});
  }
  catch(error){
    res.status(500).json({success:false,error:"There was an error"});
  }
})
//Creating API for Getting All Recipes
app.get('/recipes',async(req,res)=>{
  
  try{
    const recipes = await Recipe.find({});
    res.json(recipes);
  }
  catch(error){
    console.error(error);
    res.status(500).json({success:false,error:"There was an error"});
  }
})




//Schema for Creating Users
const User = mongoose.model('User',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//Creating Endpoint for Registering the user
app.post('/signup',async (req,res)=>{
  
  let  check = await User.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"Existing user found with same email address"})
  }
  const user = new User({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
  })

  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }
  const token = jwt.sign(data,'secret_recipe');
  res.json({success:true,token})
})

//Creating Endpoint for User Login
app.post('/login',async(req,res)=>{
  let user = await User.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_recipe');
      res.json({success:true,token});
    }
    else{
      res.json({success:false,errors:"Incorrect Password"});
    }
  }
  else{
    res.json({success:false,errors:"Incorrect Email Id"});
  }
})

app.listen(port, (error) => 
{
  if(!error)
  {
    console.log("Server is running on port: " + port);
  }
  else{
    console.log("Error: " + error);
  }
})
