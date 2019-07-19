let staffController = {}

const Staff = require('./staff.model')
const nodemailer = require('nodemailer');

staffController.addStaff = (req, res) => {

    const u = new Staff()

    u.name = req.body.name
    u.email = req.body.email
    u.number=req.body.number
    u.staff_id = 'staff_id'+Date.now()
    u.is_active = true;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {    
                console.log("Saved")
                // res.status(200).send("New Staff Created")
        }
    });
}
staffController.viewStaff = (req, res) => {

    
    Staff.find({}, (err, Client) => {
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

staffController.viewPerStaff = (req, res) => {

 Staff.findById(req.params.id, (err, Client) => {
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
staffController.editStaff = (req, res) => {
    Staff.findOneAndUpdate({_id:req.params.id}, {$set: {
        name:req.body.name ,
        email:req.body.email,
        number:req.body.number

    
    }}, function(err,res){
        if(err){
            console.log("Error");
        }else{
            console.log("Success");            
        }
    });
     
}

staffController.editActive = (req, res) => {
    var is_active = req.body.is_active;
    // console.log(isActive);
            Staff.findOneAndUpdate({ _id: req.params.id }, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}



module.exports = staffController;


