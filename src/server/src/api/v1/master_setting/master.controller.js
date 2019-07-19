let masterController = {}

const  Category= require('./master.model')


masterController.addCategory = (req, res) => {

    const u = new Category()

    u.category = req.body.category
    u.intrest_rate = req.body.intrest_rate
    u.is_active = true;
    u.save((err, result) => {
        if (err) {
            console.log("--", err)
            return res.status(400).send(err)
        } else {    
                console.log("Saved")
        }
    });
}
masterController.viewCategory = (req, res) => {

    
    Category.find({}, (err, Client) => {
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

masterController.viewPerCategory = (req, res) => {

 Category.findById(req.params.id, (err, Client) => {
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
masterController.editCategory = (req, res) => {
    Category.findOneAndUpdate({_id:req.params.id}, {$set: {
        category:req.body.category ,
        intrest_rate:req.body.intrest_rate,
        
    }}, function(err,res){
        if(err){
            console.log("Error");
        }else{
            console.log("Success");            
        }
    });
     
}

masterController.editActiveCategory = (req, res) => {
    var is_active = req.body.is_active;
    // console.log(isActive);
            Category.findOneAndUpdate({ _id: req.params.id }, {$set: {is_active:is_active}}, (err, data)=> {
                if (err) {
                    return res.send({"message":"Error while Updating","code":500});  
                } else {
                    return res.send({"message":"Updated Successfully","code":200,"last_updated":is_active});  
                     // res.status(200).send({message:"data successfullly inserted",code:200})
                }
            }) ;
}



module.exports = masterController;


