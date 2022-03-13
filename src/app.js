const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/conn")
const Userdata = require("./models/usermsg");
const port = process.env.PORT || 3000;
// setting the path
app.use(express.json());
const staticPath = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
//middleware
//setting path for bootstrap css , js and jquery
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false})); // for getting data in json format
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);
// routing
// app.get(path,callback function)

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.post("/contact",async(req,res)=>{
    try{
        const result = new Userdata(req.body);
        await result.save();
        res.status(201).render("index");
    }catch(err){
        res.status(500).send(err);
    }
})
//server create
app.listen(port,()=>{
    console.log(`listening to the port number ${port}`);
})