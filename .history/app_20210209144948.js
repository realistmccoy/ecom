const express = require('express');
const  mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
	userNewUrlParser: true,
	userCreateIndex: true
}).then(() => {conso})

//routes
app.get('/', (req, res) => {
	res.send('hello from node');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
