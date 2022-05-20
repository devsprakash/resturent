const express = require('express')
const path = require("path")
const hbs = require("hbs");
const app = express()
const port = process.env.PORT || 3000

//app.use(express.static(path.join(__dirname,"/public")));

const partialspath = path.join(__dirname,"/views");
app.use(express.static(path.join(__dirname,"/scss")))
app.set("view engine","hbs")
hbs.registerPartials(partialspath);

app.get('/', (req, res) => res.render('index'));

app.get('/about', (req, res) =>{

    res.json({
        id:435,
        name:"prakash"
    }) 
})
 

app.get('/temp', (req, res) => res.send('my temp pages'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))