const mongoose =require('mongoose');

const stockSchema= mongoose.Schema({
    stockName:{
        type:String,
        required:true
    },
    open:{
        type:String,
        required: true,
    },
    close:{
        type:String,
        required:true
    }
    
})

module.exports= mongoose.model('stockcollections',stockSchema);