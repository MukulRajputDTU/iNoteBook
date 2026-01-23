const express = require("express");
var cors = require('cors');
const dotenv = require("dotenv");
var app = express();

dotenv.config();
const connectToMongo = require("./db");
connectToMongo();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, ()=>{
    console.log('Done');
})