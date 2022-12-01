const express = require('express')
const app = express()
const mongoose = require('mongoose')



const port = process.env.PORT || 3000;
const uri = 'mongodb+srv://user1:1234@cluster0.pkiw6x0.mongodb.net/comp3123_assignment1'
//const jwt =require('jsonwebtoken');
var cors = require('cors')
app.use(cors())
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

app.use(express.json())
const usersRouter = require('./routes/users')
app.use('/api/user',usersRouter)

const employeesRouter = require('./routes/employees')
app.use('/api/emp',employeesRouter)

mongoose.connect(uri)
app.listen(port,()=> console.log("Server Started on Port "+port))