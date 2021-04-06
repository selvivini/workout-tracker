const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app =express();
// middleware for logging the routes in console use this as deve dependency
app.use(logger('dev'));
// midddlewar for post requests
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// for serving the static files from the server
app.use(express.static("public"));
// extablish the mongodb connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{useUnifiedTopology: true, useNewUrlParser: true , useFindAndModify: false }
).then(console.log('mongob connected'));

//passing the express app to the api and html routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
 
