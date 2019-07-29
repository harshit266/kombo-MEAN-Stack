const express = require('express')
const routes = require('./api/v1')
const http =require('http')
const bodyParser = require('body-parser')
const initializedb = require('./db')
const cors = require("cors");
const nodeMailer = require('nodemailer');
const cron = require("node-cron");
let app = express()
// app.server = http.createServer(app)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(cors());


initializedb( cb => {
    // cron.schedule("* * * * * *", function() {
    //     console.log("running a task every minute");
    //   });
    app.get('/',(req,res)=>{
        
        res.status(200).send("Welcome to new project")
    }
    )
    
    routes(app);
    app.listen(4000 ,()=>{
        console.log("server running on port "+ 4000)
    })
})