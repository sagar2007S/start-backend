const express = require('express')
require('dotenv').config()
//import express from "express"
 
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/whatsgram', (req,res) =>{
    res.send("<h1>Hello User</h1>");
})
app.get('/youtube', (req,res)=>{
    res.send("<h2>Welcome To My Youtube Channel</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})