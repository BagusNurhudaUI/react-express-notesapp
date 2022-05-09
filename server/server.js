const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./userRoutes') 
const bodyParser = require('body-parser')
const app = express()
dotenv.config()
connectDB();
port = process.env.PORT
app.use(express.json())
app.use(bodyParser.json())

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

app.post('/test', (req, res) => {
    
    try {
        console.log(req.body);
        res.json({"mess": "running..."})
        
    }
    catch (error) {
        console.log(error.message);
    }
    
})

app.use("/api/users", userRoutes)


app.listen (port, ()=> {console.log(`server is connected to port ${port} `)})