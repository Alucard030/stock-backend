const express=require('express');
const router=express.Router();
const controller=require('../Controllers/controller')


router.get('/',controller.getProducts);
router.post('/',controller.setProducts);

module.exports=router;