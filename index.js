const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const express = require('express');
const userRoute = require('./routes/User');
const app = express();
const cors = require('cors');
const env = require('dotenv');

app.use(cors()); 

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
app.use(cookieParser());
app.use(express.json());

// Database Connection
mongoose.connect("mongodb+srv://dhruvi:dhruvi@cluster0.ylkd7.mongodb.net/mernclass?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true},() => {
      console.log('Connected to Database');
});

app.use('/user',userRoute);


// app.listen(5000,()=>
// {
//     console.log('Express server started Running');
// });

app.listen(process.env.PORT || 5001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});