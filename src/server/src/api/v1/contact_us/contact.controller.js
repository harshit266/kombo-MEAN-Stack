let contactController = {}

const Contact = require('./contact.model');
const nodemailer = require('nodemailer');

contactController.addContact = (req, res) => {

    // var email = req.body.email
    // console.log("--email", email)


    const u = new Contact()

    u.name = req.body.username
    u.email = req.body.email
    u.number=req.body.number
    u.subject = req.body.subject
    u.message=req.body.message
    u.is_active = true;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
           res.status(200).send("Contact added")
        }
    });
}
contactController.viewContact = (req, res) => {

    //let email = req.body.email;

    Contact.find({}, (err, Client) => {
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


contactController.viewContactUser = (req, res) => {

    //let email = req.body.email;
   Contact.findById(req.params.id, (err, Client) => {
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

contactController.reply = (req, res) => {

    //let email = req.body.email;
   Contact.findById(req.params.id, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
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
                        to: req.body.email,
                        subject: "Hello ✔",
                        text: req.body.reply,
                        // html: "<b>Email:</b><br><b>Password :<b>"
                    });
    
                    console.log("Message sent: %s", info.messageId);
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
                }
    
    
                main().catch(console.error);
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
}







module.exports = contactController;








