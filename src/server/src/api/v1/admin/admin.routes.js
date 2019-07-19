const express = require('express')
const adminController =require('./admin.controller')

const router =express.Router();

router.get('/create',function(req,res){
    adminController.create(req,res)
})
router.post('/search',function(req,res){
    adminController.search(req,res)
})
router.post('/filterCategory',function(req,res){
    adminController.filterCategory(req,res)
})
router.post('/filterAmount',function(req,res){
    adminController.filterAmount(req,res)
})
router.post('/addUser',function(req,res){
    adminController.addUser(req,res)
})
router.get('/viewUser',function(req,res){
    adminController.viewUser(req,res)
})
router.get('/viewPerUser/:id',function(req,res){
    adminController.viewPerUser(req,res)
})
router.post('/updatePersonaldetails/:id',function(req,res){
    adminController.updatePersonaldetails(req,res)
})
router.post('/editActiveUser/:id',function(req,res){
    adminController.editActiveUser(req,res)
})



module.exports= router;