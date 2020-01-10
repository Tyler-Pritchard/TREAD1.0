const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://root:toor@cluster0-ygila.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    //prevents common warning messages in terminal
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
})


app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});