const express=require('express');
const router=express.Router();
const controller=require('../Controllers/controller');


router.get('/',controller.getStocks);
router.post('/',controller.setStocks);
router.put('/',controller.updateStocks);
router.delete('/',controller.removeStocks);

module.exports=router;