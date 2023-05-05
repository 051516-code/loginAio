require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const dbConnect = require('./database/mongo'); //TODO: database
const app = express();



//Initializers

//Settings
app.use(morgan('dev'))

//TODO: config views
app.set('views',path.join(__dirname, "views"));  // TODO : find the file views using path and dirname
app.engine('ejs', engine);                      // TODO : config the templates
app.set('view engine', 'ejs');                  // TODO : set the templates


//Middlewares


//Routes
// app.use('/', (req, res) =>  {
//     res.send('hello desde el index')
// });  
app.get('/', require('./routes/index'));  


// TOOD: create the Server
const starServer = () => {
    try {
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log(`***SERVER RUNNING ON PORT : ${PORT}***`);
    })

    }catch(error){
        //TODO: in case of ERROR
        console.log(`***ERROR ON SERVER ${error.message}***`);
    }
}

// TODO: start the server
starServer();
// TODO: conect to database
dbConnect();