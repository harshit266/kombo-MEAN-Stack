const express = require('express')
const querryController =require('../user/user.model')

const router =express.Router();

router.get('/create',function(req,res){
    querryController.create(req,res)
})
router.post('/querySearch',function(req,res){
    querryController.querySearch(req,res)
})
router.post('/queryFilterCategory',function(req,res){
    querryController.filterCategory(req,res)
})
router.post('/queryFilterAmount',function(req,res){
    querryController.filterAmount(req,res)
})
router.post('/queryAddUser',function(req,res){
    querryController.queryAddUser(req,res)
})
router.get('/queryViewUser',function(req,res){
    querryController.queryViewUser(req,res)
})
router.get('/queryViewPerUser/:id',function(req,res){
    querryController.queryViewPerUser(req,res)
})




module.exports= router;