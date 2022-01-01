const mongoose =require('mongoose');

const productSchema= mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        default:0
    },
    contact:{
        type:String
    }
    
})

module.exports= mongoose.model('ProductCollection',productSchema);