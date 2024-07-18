require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/home',(req,res)=>{
    res.send("this the home page")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login to my channel</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>This is my youtube channel</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`port is running on ${process.env.PORT}`);
})