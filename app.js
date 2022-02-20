const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Routes=require('./Routes/routes')
const cors = require('cors')


//db Connetion
const mongoURL="mongodb+srv://cat:1234@cluster0.hhtmx.mongodb.net/Stocks?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{ useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
    if(!err) console.log('DB Connected');
    else console.log('Error: ',err);
});


//middleware
app.use(express.json());
app.use(cors());
app.use('/',Routes);

app.listen(3000,(err)=>{
    if(err) console.log("Error: ",err)
    else console.log("Server listening on port 3000");
})