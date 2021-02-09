const express = require('express');
require('dotenv').config();


const app = express();


app.get('/', (req, res) => {
	res.send('hello from node');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
