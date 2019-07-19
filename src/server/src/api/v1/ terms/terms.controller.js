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

module.exports = termsController;