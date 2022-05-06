const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()
dotenv.config()
connectDB();

app.use(express.json())
const userRoutes = require('./userRoutes') 

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

app.use("/api/users", userRoutes)


app.listen (process.env.PORT, ()=> {console.log(`server is connected to port 5000 `)})