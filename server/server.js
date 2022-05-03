const express = require('express')
const app = express()


app.get ("/", (req, res) => {
    res.send("API is Running...")
})

app.get ("/notes", (req, res) => {
    res.send
})
app.get ("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})


app.listen (5000, ()=> {console.log(`server is connected to port 5000 `)})