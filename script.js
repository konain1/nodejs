

const express = require('express')
const app = express();
let port  = 3001

app.use((req,res,next)=>{
    console.log('middle ware')
    next()
})
app.get('/' , (req,res)=>{
    res.send('http method')
})
app.listen(port)