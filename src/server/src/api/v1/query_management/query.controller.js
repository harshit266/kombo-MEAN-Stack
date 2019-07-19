let queryController = {}

const user = require('../user/user.model')

// const nodemailer = require('nodemailer');


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
    // console.log("base64str :",base64str);
    var buf = Buffer.from(base64str,'base64');
    var fileName ="file_" + new Date().getTime();
    fs.writeFile(path.join(__dirname,'./../../../public/',fileName), buf, function(error){
    if(error){
      console.log(error);
      throw error;
    }
    else{
        console.log("Image uploaded");
    //   return res.status(200).send({"message":"Image Uploaded Successfully","result":"https://tracfinance.co" + "/public/" + fileName,"status":200});  
    }
});       
    
    u.bank_statement="https://localhost:4200"+ "/public/" + fileName; 
    u.username = req.body.username
    u.email = req.body.email
    u.number= req.body.number
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

module.exports = queryController;








