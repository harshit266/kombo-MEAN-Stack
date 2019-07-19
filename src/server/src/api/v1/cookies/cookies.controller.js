let cookiesController = {}
// const admin = require('./admin.model')
const cookies = require('./cookies.model')



cookiesController.cookiesEdit = (req,res)=>{
    cookies.find({}, (err, Client) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {
            if (Client) {
                // console.log("Cl",Client.length)
                if(Client.length==0)
                {
                    const u = new cookies();
                    u.description = req.body.cookies;
                    u.save(function(err, result){
                        if(err){
                            console.log("Error");
                        }
                        else{
                            console.log(" First Success");
                            return res.send("Succes");
                        }
                    })
                }
                else{
                  
                                cookies.findOneAndUpdate({}, {$set: {description:req.body.cookies}}, function(err,res){
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
cookiesController.cookies = (req, res) => {

    //let email = req.body.email;

    cookies.find({}, (err, Client) => {
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
module.exports = cookiesController;