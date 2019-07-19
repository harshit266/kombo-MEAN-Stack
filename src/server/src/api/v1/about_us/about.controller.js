let aboutController = {}
const about = require('./about.model')

aboutController.aboutEdit = (req,res)=>{
    console.log(req.body.about)
    about.findOneAndUpdate({_id:req.params.id}, {$set: {description:req.body.about}}, function(err,res){
        if(err){
            console.log("Error");
        }else{
            console.log("Success");            
        }
    });
   
}


aboutController.about = (req, res) => {

    //let email = req.body.email;

    about.find({}, (err, Client) => {
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


module.exports = aboutController;