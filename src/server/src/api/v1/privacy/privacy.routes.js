const express = require('express')
const privacyController =require('./privacy.controller')

const router =express.Router();
router.post('/privacy-edit',function(req,res){
    privacyController.privacyEdit(req,res)
})
router.get('/privacy',function(req,res){
    privacyController.privacy(req,res)
})
router.post('/editActivePrivacy',function(req,res){
    privacyController.editActivePrivacy(req,res)
})
module.exports= router;