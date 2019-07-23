let termsController = {}
const terms = require('./terms.model')

termsController.termsEdit = (req,res)=>{
    terms.find({}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                
                if(Client.length==0)
                {
                    const u = new terms();
                    u.is_active=true;
                    u.description = req.body.terms;
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
                   
                                terms.findOneAndUpdate({}, {$set: {description:req.body.terms}}, function(err,res){
                                    if(err){
                                        console.log("Error");
                                    }else{
                                        console.log("Success");            
                                    }
                                });
                   
                      
                    }   
            } else {
                res.status(400).send("Doesn't exist")
            }

        }
    })
   
}
termsController.terms = (req, res) => {

    //let email = req.body.email;

    terms.find({}, (err, Client) => {
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

termsController.editActiveTerms= (req,res) => {
    var is_active = req.body.is_active;
    console.log(is_active);
            terms.findOneAndUpdate({}, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}

module.exports = termsController;