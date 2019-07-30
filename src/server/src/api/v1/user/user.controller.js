let userController={}
const User= require('./user.model');
const Borrowing = require('./borrowing.model');
const Category = require ('../master_setting/master.model');
const nodemailer = require('nodemailer');
const query = require('../query_management/query.model');

userController.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("Incomplete Argument")
    }
    var email = req.body.email
   
    User.findOne({ email: email }, { email: 1, password: 1 }, (err, user) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        } else {
            if (user) {
               if(req.body.password===user.password){
                   // console.log("admin Login Success")
                   res.status(200).send({
                       msg : "Login Succesful",
                       code:200
                   })
               }else{
                res.status(200).send({
                    msg: "wrong username/password",
                    code:400
                })   
               }
            } else {
                // console.log("Inside Else");
                res.status(200).send({
                    msg: "wrong username/password",
                    code:400
                })
            }
        }


    })
}

userController.forgotPassword = (req, res) => {
    var email=req.body.email
    User.findOne({email:email}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                var email = req.body.email
                var otp = Math.round(Math.random()*(9999-1000)+1000);
                console.log(otp);
                
                User.findOneAndUpdate({email:email}, {$set: {otp:otp}}, function(err,res){
                        if(err){
                            console.log("Error");
                        }else{
                            // console.log("Success");
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
                                    subject: "Password Reset",
                                    text: "Automatic generated OTP",
                                    html: "<b>OTP - : </b>"+otp
                                });
                        
                                console.log("Message sent: %s", info.messageId);
                                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                        
                            }       
                            main().catch(console.error);     
                        }
                    });
                    
                    // console.log("---------------")   
                }
             else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
}

userController.checkOtp = (req, res) => {
  
   var email= req.body.email
    User.findOne({ email: email}, (err, user) => {
        if (err) {
            res.status(400).send(err)
        } else {
            if (user) {
                console.log(user)
               if(req.body.otp===user.otp){
                   // console.log("admin Login Success")
                   res.status(200).send({
                       msg : "Succesful",
                       code:200,
                       id:user._id
                   })
               }else{
                res.status(200).send({
                    msg: "Wrong OTP",
                    code:400
                })   
               }
            } else {
                // console.log("Inside Else");
                res.status(200).send({
                    msg: "Wrong OTP",
                    code:400
                })
            }
        }


    })
}



userController.changePassword = (req, res) => {
    // var email=req.body.email
             
                User.findOneAndUpdate({_id:req.body.id}, {$set: {password:req.body.password}}, function(err,res){
                        if(err){
                            console.log("Error");
                        }else{
                            console.log("Success");   
                        }
                    });
                
}

userController.addBorrowing = (req, res) => {
            const b= new Borrowing();
            b.borrowing_id=req.body.id;
            Category.find({category:req.body.category}, (err, Client) => {
                if (err) {
                    console.log("--", err)
                    return res.status(400).send(err)
                } else {
                    if (Client) {
                        b.category=req.body.category
                        b.amount=((12)*(req.body.amount)) + req.body.amount
                        b.due_date = req.body.date;
                        b.month = req.body.month;
                        b.installment_per_month = (b.amount)/(req.body.month)
                        b.save((err, result) => {
                            
                            if (err) {
                                console.log("--", err)
                                return res.status(400).send(err)
                            } else {    
                                    console.log("Saved")
                            }
                        });
                    } else {
                        res.status(400).send("Doesn't exist")
                    }
        
                }
            })
          

}

userController.viewBorrowing = (req, res) => {

    // console.log("first",req.params.id);
    Borrowing.findOne({borrowing_id:req.params.id}, (err, Client) => {
        // console.log("first",req.params.id);
            console.log(Client)
            if (err) {
                console.log("-- error", err)
                return res.status(400).send(err)
            } else {
                // console.log("aaaaa")
                if (Client) {
                    
                    return res.status(200).send(Client)
                } else {
                    console.log("ooo")
                    res.status(400).send("Doesn't exist")
                }
    
            }
        })
   
}

userController.viewBorrowingUser = (req, res) => {

    // console.log("first",req.params.id);
    User.findOne({email:req.params.email}, (err, Client) => {
        // console.log("first",req.params.id);
            console.log(Client)
            if (err) {
                console.log("-- error", err)
                return res.status(400).send(err)
            } else {
                // console.log("aaaaa")
                if (Client) {
                    Borrowing.findOne({borrowing_id:Client.user_id}, (err, Client) => {
                        // console.log("first",req.params.id);
                            console.log(Client)
                            if (err) {
                                console.log("-- error", err)
                                return res.status(400).send(err)
                            } else {
                                // console.log("aaaaa")
                                if (Client) {
                                    console.log("sddddd")
                                    return res.status(200).send(Client)
                                } else {
                                    console.log("ooo")
                                    res.status(400).send("Doesn't exist")
                                }
                    
                            }
                        })
                    
                } else {
                    console.log("ooo")
                    res.status(400).send("Doesn't exist")
                }
    
            }
        })
   
}

userController.viewBorrowingQuery = (req, res) => {

    // console.log("first",req.params.id);
    query.findOne({email:req.params.email}, (err, Client) => {
        // console.log("first",req.params.id);
            console.log(Client)
            if (err) {
                console.log("-- error", err)
                return res.status(400).send(err)
            } else {
                // console.log("aaaaa")
                if (Client) {
                    
                    return res.status(200).send(Client)
                } else {
                    console.log("ooo")
                    res.status(400).send("Doesn't exist")
                }
    
            }
        })
   
}
   
    





module.exports = userController;