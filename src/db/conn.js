const mongoose = require("mongoose");
//creating a database named nodeDynamicweb
mongoose.connect("mongodb://localhost:27017/nodeDynamicweb",{
    useNewUrlParser:true,  // used for deprication warning
    useUnifiedTopology:true // used for deprication warning
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})
