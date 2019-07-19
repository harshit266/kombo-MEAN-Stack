const express = require('express')
const contactController =require('./contact.controller')

const router =express.Router();

router.post('/addContact',function(req,res){
    contactController.addContact(req,res)
})
router.get('/viewContact',function(req,res){
    contactController.viewContact(req,res)
})
router.get('/viewPerContact/:id',function(req,res){
    contactController.viewPerContact(req,res)
})
router.post('/reply/:id',function(req,res){
    contactController.reply(req,res)
})



module.exports= router;