let privacyController = {}
const privacy = require('./privacy.model')
privacyController.privacy = (req, res) => {

    //let email = req.body.email;

    privacy.find({}, (err, Client) => {
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
privacyController.privacyEdit = (req,res)=>{
    privacy.find({}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                // console.log("Cl",Client.length)
                if(Client.length==0)
                {
                    const u = new privacy();
                    u.description = req.body.privacy;
                    u.save(function(err, result){
                        if(err){
                            console.log("Error");
                        }
                        else{
                            console.log(" First Success");
                        }
                    })
                }
                else{
                    // privacy.find({}, (err, Client) => {
                    //     if (err) {
                    //         console.log("--", err)
                    //         return res.status(400).send(err)
                    //     } else {
                    //         if (Client) {
                                privacy.findOneAndUpdate({}, {$set: {description:req.body.privacy}}, function(err,res){
                                    if(err){
                                        console.log("Error");
                                    }else{
                                        console.log("Success");            
                                    }
                                });
                    //     //     } else {
                    //     //         res.status(400).send("Doesn't exist")
                    //     //     }
                
                    //     // }
                    // })
                      
                    }   
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
   
        
 }

 module.exports = privacyController;