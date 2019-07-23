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
                    u.is_active=true;
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

cookiesController.editActiveCookies= (req,res) => {
    var is_active = req.body.is_active;
    console.log(is_active);
            cookies.findOneAndUpdate({}, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}
module.exports = cookiesController;