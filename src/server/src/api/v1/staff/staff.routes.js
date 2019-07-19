const express = require('express')
const staffController =require('./staff.controller')

const router =express.Router();

router.post('/addStaff',function(req,res){
    staffController.addStaff(req,res)
})
router.get('/viewStaff',function(req,res){
    staffController.viewStaff(req,res)
})
router.get('/viewPerStaff/:id',function(req,res){
    staffController.viewPerStaff(req,res)
})
router.post('/editStaff/:id',function(req,res){
    staffController.editStaff(req,res)
})
router.post('/editActive/:id',function(req,res){
    staffController.editActive(req,res)
})


module.exports= router;