const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({limit:'510mb' , extended : 'true'}));

const routes = require('./routes/router.js')
app.use('/status',routes);

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>console.log(`server running on ${port}`));

app.get('/',(req,res)=> res.send("Welcome to get the Envelope Status..."));
