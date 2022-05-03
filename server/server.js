const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const PORT = process.env.PORT

app.get ("/", (req, res) => {
    res.send("API is Running...")
})

app.get ("/api/notes", (req, res) => {
    res.json(notes)
})

app.get ("/api/notes/:id", (req, res) => {
    console.log(req.params);
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note)
})

app.get ("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})


app.listen (PORT, ()=> {console.log(`server is connected to port ${PORT} `)})