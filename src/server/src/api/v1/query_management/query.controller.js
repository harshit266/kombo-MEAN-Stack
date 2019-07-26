let queryController = {}
const User=require('../user/user.model');
const user = require('./query.model')
const fs= require('fs')
// const nodemailer = require('nodemailer');
const nodemailer = require('nodemailer');


queryController.create = (req, res) => {
    res.status(200).send("admin created");
}

queryController.querySearch = (req, res) => {

    if (!req.body.email && !req.body.username && !req.body.number) {

        console.log("incomplete", req.body.email)
        console.log("incomplete", req.body.username)
        console.log("incomplete", req.body.number)
        return res.status(400).send("Enter something for search")
    }

    let email = req.body.email;
    let username = req.body.username;
    let number = req.body.number;
    if (email || username || number) {
        user.find({ $or: [{ email: email }, { username: username }, { number: number }] }, (err, Client) => {
            if (err) {
                console.log("--", err)
                return res.status(400).send(err)
            } else {
                if (Client) {
                    return res.status(200).send(Client)
                } else {
                    res.status(400).send("Doesn't exist")
                }

            }
        })
    }

}

queryController.queryFilterCategory = (req, res) => {

    if (!req.body.category) {

        console.log("incomplete", req.body.category)
        return res.status(400).send("Enter something for search")
    }

    let category = req.body.category;

    if (category) {
        user.find({ category: category }, (err, Client) => {
            if (err) {
                console.log("--", err)
                return res.status(400).send(err)
            } else {
                if (Client) {
                    return res.status(200).send(Client)
                } else {
                    res.status(400).send("Doesn't exist")
                }

            }
        })
    }
}
queryController.queryFilterAmount = (req, res) => {

    if (req.body.amount) {

        console.log("incomplete", req.body.amount)
        return res.status(400).send("Enter something for search")
    }

    let amount = req.body.amount;

    if (amount) {
        user.find({ amount: amount }, (err, Client) => {
            if (err) {
                console.log("--", err)
                return res.status(400).send(err)
            } else {
                if (Client) {
                    return res.status(200).send(Client)
                } else {
                    res.status(400).send("Doesn't exist")
                }

            }
        })
    }
}


queryController.queryAddUser = (req, res) => {

    var email = req.body.email
    console.log("--email", email)


    const u = new user()

    var base64str = req.body.bank_statement;  
    var buf = Buffer.from(base64str,'base64');
     var fileName1 ="file_" + new Date().getTime();
    // Grab the extension to resolve any image error
    var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
    // strip off the data: url prefix to get just the base64-encoded bytes
    var data = base64str.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    var buf = new Buffer(data, 'base64');
    var fileName1= "image_" + Date.now() + '.' + ext;
    fs.writeFile('public/' + fileName1 , buf,function(err){
        if(err){
              console.log(err);
            console.log("Error occurred");
          //throw err;
        }else{
            console.log("Image uploaded");
          //  return res.status(200).send({"message":"Image Uploaded Successfully","result":req.protocol + "://" + req.get('host') + req.originalUrl + "public/" + fileName,"status":200});  
 
        }
    });

  
    
    u.bank_statement="http://localhost:4000"+ "/public/" + fileName1
    u.status="pending"
    u.username = req.body.username
    u.email = req.body.email
    u.number= req.body.number
    u.amount = req.body.amount
    u.category=req.body.category
    u.is_active = true;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
                res.status(200).send("User registered Succesfully")
        }
    });
}
queryController.queryViewUser = (req, res) => {

    //let email = req.body.email;

    user.find({}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                return res.status(200).send(Client)
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
}

queryController.queryViewPerUser = (req, res) => {

    //let email = req.body.email;
    console.log("0-------------------------------------")
    console.log("-------", req.params.id)
    user.findById(req.params.id, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                return res.status(200).send(Client)
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
}

queryController.editCategory = (req, res) => {

    var base64str = req.body.bank_statement;  
    var buf = Buffer.from(base64str,'base64');
     var fileName1 ="file_" + new Date().getTime();
    // Grab the extension to resolve any image error
    var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
    // strip off the data: url prefix to get just the base64-encoded bytes
    var data = base64str.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    var buf = new Buffer(data, 'base64');
    var fileName1= "image_" + Date.now() + '.' + ext;
    fs.writeFile('public/' + fileName1 , buf,function(err){
        if(err){
              console.log(err);
            console.log("Error occurred");
          //throw err;
        }else{
            console.log("Image uploaded");
          //  return res.status(200).send({"message":"Image Uploaded Successfully","result":req.protocol + "://" + req.get('host') + req.originalUrl + "public/" + fileName,"status":200});  
 
        }
    });



    user.findOneAndUpdate({_id:req.params.id}, {$set: {
        bank_statement : "http://localhost:4000"+ "/public/" + fileName1,
        username : req.body.username,
        email  : req.body.email,
        number : req.body.number,
        amount : req.body.amount,
        category:req.body.category,
        
    }}, function(err,res){
        if(err){
            console.log("Error");
        }else{
            console.log("Success");            
        }
    });
     
}

queryController.added = (req, res) => {

    var email = req.body.email;  
    var id= req.body.id;

    async function main() {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 4000,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'harshit.vayuz@gmail.com', // use testAccount too
                pass: 'Harshit@266'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        console.log("p----------------------")
        let info = await transporter.sendMail({

            from: 'harshit.vayuz@gmail.com',
            to: email,
            subject: "Kombo Cash ✔",
            text: "This is your Credentials :",
            html: "<b>Email:</b>"+ email + "<br><b>Password : <b>"+12345
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }
    const m= new User();
    m.email=email;
    m.password="12345"
    m.is_active=true;
    m.username=req.body.username;
    m.user_id= id;
    m.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            user.findOneAndUpdate({_id:id}, {$set: {
                status:"approved"
                 
             }}, function(err,res){
                 if(err){
                     console.log("Error");
                 }else{
                     console.log("Success user updated");            
                 }
             });
        }
    });

   
    main().catch(console.error);
     
}

queryController.rejected = (req, res) => {

    var email = req.body.email;  
    var id=req.body.id;
    async function main() {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 4000,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'harshit.vayuz@gmail.com', // use testAccount too
                pass: 'Harshit@266'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        console.log("p----------------------")
        let info = await transporter.sendMail({

            from: 'harshit.vayuz@gmail.com',
            to: email,
            subject: "Kombo Cash  ✔",
            text: "Sorry Your Application has been rejected",
            html: "<b>Thankyou</b>"
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }
    user.findOneAndUpdate({_id:id}, {$set: {
        status:"rejected"
         
     }}, function(err,res){
         if(err){
             console.log("Error");
         }else{
             console.log("Success");            
         }
     });

    main().catch(console.error);
     
}



module.exports = queryController;








