const productCollection=require('../Models/model');

const getProducts= async(req,res,next)=>{
    try {
        products = await productCollection.find({});
        return res.json({data : products});
    } catch (err){
        return res.status(400).json({err});
    }
}

const setProducts= async (req,res,next)=> {
    try {
        product= new productCollection(req.body)
        await product.save();
        return res.json({data: product});
    } catch(err){
        return res.status(400).json({err});
    }

}

module.exports={
    getProducts,
    setProducts,
}

