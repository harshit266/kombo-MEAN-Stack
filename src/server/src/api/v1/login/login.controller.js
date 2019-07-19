let loginController = {}
const Login = require('./login.model')
loginController.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // console.log("incomplete", req.body.email)
        // console.log("incomplete", req.body.password)
        return res.status(400).send("Incomplete Argument")
    }
    // console.log("in login--")
    var email = req.body.email
    // console.log("--email", email)
   
    Login.findOne({ email: email }, { email: 1, password: 1 }, (err, user) => {
        if (err) {
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

loginController.createAdminUser = (req, res) => {
    const u = new Login()
    u.email = req.body.email;
    u.user_id = 'user_id_' + Date.now();
    u.password= req.body.password;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            console.log("success")
        }
    });
}
module.exports = loginController;