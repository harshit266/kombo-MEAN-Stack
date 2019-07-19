let adminController = {}

const user = require('../user/user.model')
const admin = require('./admin.model')

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


adminController.create = (req, res) => {
    res.status(200).send("admin created");
}

adminController.search = (req, res) => {

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

adminController.filterCategory = (req, res) => {

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
adminController.filterAmount = (req, res) => {

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


adminController.addUser = (req, res) => {

    var email = req.body.email
    console.log("--email", email)


    const u = new user()

    u.username = req.body.username
    u.email = req.body.email
    u.is_active = true;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
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
                    subject: "Hello ✔",
                    text: "This is your Credentials :",
                    html: "<b>Email:</b><br><b>Password :<b>"
                });

                console.log("Message sent: %s", info.messageId);
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            }


            main().catch(console.error);
        }
    });
}
adminController.viewUser = (req, res) => {

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

module.exports = adminController

adminController.viewPerUser = (req, res) => {

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
adminController.updatePersonaldetails = (req, res) => {
    console.log(req.params.id)
    console.log(req.body.email , req.body.username);
    user.findOneAndUpdate({_id:req.params.id}, {$set: {username:req.body.username ,  email:req.body.email}}, function(err,res){
        if(err){
            console.log("Error");
        }else{
            console.log("Success");            
        }
    });
    console.log("---------------")   
}

adminController.editActiveUser = (req, res) => {
    var is_active = req.body.is_active;
    // console.log(isActive);
            user.findOneAndUpdate({ _id: req.params.id }, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}





module.exports = adminController;








// adminController.login = (req, res) => {
    //     if (!req.body.email || !req.body.password) {
    //         console.log("incomplete", req.body.email)
    //         console.log("incomplete", req.body.password)
    //         return res.status(400).send("Incomplete Argument")
    //     }
    //     console.log("in login--")
    //     var email = req.body.email
    //     console.log("--email", email)
    //     admin.findOne({ email: email }, { email: 1, password: 1 }, (err, user) => {
    //         if (err) {
    //             res.status(400).send(err)
    //         } else {
    //             if (user) {
    //                 bcrypt.compare(req.body.password, user.password, function (err, result) {
    //                     if (err) {
    //                         res.status(400).send(err)
    //                     } else {
    //                         if (result) {

    //                             let userObj = user.toObject();
    //                             delete userObj["password"]
    //                             res.status(200).send({
    //                                 msg: "login successfull"

    //                             })

    //                         } else {
    //                             res.status(400).send({
    //                                 msg: "wrong username/password"
    //                             })
    //                         }

    //                     }
    //                 });
    //             } else {
    //                 res.status(400).send({
    //                     msg: "wrong username/password"
    //                 })
    //             }
    //         }


    //     })
    // }