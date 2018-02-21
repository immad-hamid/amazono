// requiring 3rd party modules
const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const cors          = require('cors');
// requiring local files
const config        = require('./config');
// intialting express
const app           = express();

// connecting mongoDB using mongoose
mongoose.connect(config.database, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

// using body parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// adding middleware
app.use(morgan('dev'));

// adding cors to communicate with the client
app.use(cors());

const userRoutes = require('./routes/account');
app.use('/api/accounts', userRoutes);

// the port at which the server would be running
app.listen(3030, err => {
    console.log(`Working on port ${ config.port }`);
});