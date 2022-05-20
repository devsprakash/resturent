
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = process.env.PORT || 8000


mongoose.connect("mongodb://localhost:27017/studentsapi",{

    useCreateIndex:true,
    useNewUrlparser:true,
    useUnifiedTopology:true
    
}).then(() =>console.log("connted"))
 .catch((err) =>console.log(err));

app.post("")


app.get('/',(req,res) =>{

    res.send("hello  world");
})

app.post('/students',(req,res) =>{

    res.send("hello world");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))