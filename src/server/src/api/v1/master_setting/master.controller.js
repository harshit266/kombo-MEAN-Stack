let masterController = {}

const  Category= require('./master.model')


masterController.addCategory = (req, res) => {

    const u = new Category()

    var base64str = req.body.categoryImage;  
    var buf = Buffer.from(base64str,'base64');
     var fileName1 ="file_" + new Date().getTime();
    // Grab the extension to resolve any image error
    var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
    // strip off the data: url prefix to get just the base64-encoded bytes
    var data = base64str.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    var buf = new Buffer(data, 'base64');
    var fileName1= "image_" + Date.now() + '.' + ext;
    fs.writeFile('public/' + fileName1 , buf,function(err){
        if(err){
              console.log(err);
            console.log("Error occurred");
          //throw err;
        }else{
            console.log("Image uploaded");
          //  return res.status(200).send({"message":"Image Uploaded Successfully","result":req.protocol + "://" + req.get('host') + req.originalUrl + "public/" + fileName,"status":200});  
 
        }
    });
    u.category_image="http://localhost:4000"+ "/public/" + fileName1;
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

    var base64str = req.body.categoryImage;  
    var buf = Buffer.from(base64str,'base64');
     var fileName1 ="file_" + new Date().getTime();
    // Grab the extension to resolve any image error
    var ext = base64str.split(';')[0].match(/jpeg|png|gif/)[0];
    // strip off the data: url prefix to get just the base64-encoded bytes
    var data = base64str.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    var buf = new Buffer(data, 'base64');
    var fileName1= "image_" + Date.now() + '.' + ext;
    fs.writeFile('public/' + fileName1 , buf,function(err){
        if(err){
              console.log(err);
            console.log("Error occurred");
          //throw err;
        }else{
            console.log("Image uploaded");
          //  return res.status(200).send({"message":"Image Uploaded Successfully","result":req.protocol + "://" + req.get('host') + req.originalUrl + "public/" + fileName,"status":200});  
 
        }
    });



    Category.findOneAndUpdate({_id:req.params.id}, {$set: {
        category:req.body.category ,
        intrest_rate:req.body.intrest_rate,
        category_image:"http://localhost:4000"+ "/public/" + fileName1
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
    console.log(is_active);
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


