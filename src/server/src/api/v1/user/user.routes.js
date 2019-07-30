const express = require('express')
const userController =require('./user.controller')

const router =express.Router();

router.post('/userLogin',function(req,res){
    userController.login(req,res)
})

router.post('/forgotPassword',function(req,res){
    userController.forgotPassword(req,res)
})
router.post('/checkOtp',function(req,res){
    userController.checkOtp(req,res)
})
router.post('/changePassword',function(req,res){
    userController.changePassword(req,res)
})
router.post('/addBorrowing',function(req,res){
    userController.addBorrowing(req,res)
})
router.get('/viewBorrowing/:id',function(req,res){
    userController.viewBorrowing(req,res)
})
router.get('/viewBorrowingPerUserDetails/:email',function(req,res){
    userController.viewBorrowingUser(req,res)
})
router.get('/viewBorrowingPerUserDetailsQuery/:email',function(req,res){
    userController.viewBorrowingQuery(req,res)
})

module.exports = router;