var express = require('express')
const app = express()
const ip = require('request-ip')

app.get("/", (req, res)=>{
    console.log(ip.getClientIp(req))
    res.send("Hehe I got your Ip")
})



app.listen(3000)