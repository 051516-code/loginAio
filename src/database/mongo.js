const mongoose = require('mongoose')

// TODO: take the url 
const URL = process.env.DB_URI || "mongodb://127.0.0.1:27017/apiTest"

const dbConnect = async () => {
    try{
        //TODO: Create a instance of client mongoDB
         await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`***SUCCESS TO CONNECT DB***`);
    }catch (error){
        //TODO: in case of ERROR
        console.log(`***ERROR CONNECTION TO DB: ${error.message}***`);
    }

}

module.exports = dbConnect