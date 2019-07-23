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
                    u.is_active=true;
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

 privacyController.editActivePrivacy= (req,res) => {
    var is_active = req.body.is_active;
    console.log(is_active);
            privacy.findOneAndUpdate({}, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}

 module.exports = privacyController;