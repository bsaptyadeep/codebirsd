const router = require("express").Router();
const Company = require('../models/companyModel');

router.post('/', async (req, res) => {
    try {
        let com = await Company.findOne({ name: req.body.name , role: req.body.role})
        if (com) {
            res.status(201).send({ message: "This company and role already exit in database" });
        }
        else {
            cat = await new Company(req.body).save();
            res.status(200).send({ message: "Company Added" })
        }
    }
    catch (err) {
        res.status(400).send({ error: err });
    }
}).get('/', async (req, res) => {
    try {
        const com = await Company.find();
        if(com.length==0)
        res.status(201).send({message: "No category defined", cat: categories});
        else
        res.status(200).send(com)
    }
    catch(er)
    {
        res.status(401).send({error: er});
    }
// }).delete('/', async (req, res) => {
//     console.log(req.body);
//     Category.deleteOne({ _id: req.body._id }).then(function(){
//         console.log("Data deleted"); 
//         res.status(200).send({message: "Data deleted"})// Success
//     }).catch(function(error){
//         res.status(400).send({message: `Delete Failed, Error: ${error}`})
//         console.log(error); // Failure
//     });
})

module.exports = router;