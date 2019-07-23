const express = require('express')
const termsController =require('./terms.controller')

const router =express.Router();


router.post('/terms-edit',function(req,res){
    termsController.termsEdit(req,res)
})
router.get('/terms',function(req,res){
    termsController.terms(req,res)
})
router.post('/editActiveTerms',function(req,res){
    termsController.editActiveTerms(req,res)
})

module.exports =  router;