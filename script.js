

const express = require('express')
const app = express();
let port  = 3001

app.get('/' , (req,res)=>{
    res.send('http method')
})
app.listen(port)