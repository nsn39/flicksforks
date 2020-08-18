const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./db/index');
const movieRouter = require('./routes/router');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyparser.json())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter);

//create a GET Route 
app.get('/data', (req, res) => {
    res.send({message: "Hey you did it man!"});
});

// Listeing to the server
app.listen(port, () => console.log('App is running on the port'));

