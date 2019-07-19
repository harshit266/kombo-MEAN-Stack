const express = require('express')
const privacyController =require('./privacy.controller')

const router =express.Router();
router.post('/privacy-edit',function(req,res){
    privacyController.privacyEdit(req,res)
})
router.get('/privacy',function(req,res){
    privacyController.privacy(req,res)
})
module.exports= router;