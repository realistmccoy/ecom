const express = require('express');
require('dotenv').config();



//app
const app = express();

//routes
app.get('/', (req, res) => {
	res.send('hello from node');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
