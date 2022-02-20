const stockCollection=require('../Models/model');

const getStocks= async(req,res,next)=>{
    try {
        stocks = await stockCollection.find({});
        return res.json({data : stocks});
    } catch (err){
        return res.status(400).json({err});
    }
}

const setStocks= async (req,res,next)=> {
    try {
        stock= new stockCollection(req.body);
        await stock.save();
        return res.json({data: stock});
    } catch(err){
        return res.status(400).json({err});
    }

}

const updateStocks= async(req,res,next)=>{
    try {
        stocks = await stockCollection.updateOne({_id: req.body._id},{$set:req.body});
        return res.json({data : stocks});
    } catch (err){
        return res.status(400).json({err});
    }
}

const removeStocks= async(req,res,next)=>{
    try {
        stocks = await stockCollection.findOneAndRemove(req.body);
        return res.json({data : stocks});
    } catch (err) {
        return res.status(400).json({err});
    }
}

module.exports={
    getStocks,
    setStocks ,
    updateStocks,
    removeStocks
}

