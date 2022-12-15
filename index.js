require('dotenv').config()
const express = require("express");
const app = express();
// const cors = require('cors')

require('./db')

const ClienteRouter = require('./routes/Cliente.routes')
const MovRouter = require('./routes/Mov.routes')
app.use(express.json())
// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "/*");
//     res.header("Access-Control-Allow-Methods", 'GET,POST');
//     app.use(cors())
//     next();
// })
// app.use(cors())

app.use('/cliente', ClienteRouter)
app.use('/mov', MovRouter)



app.listen('8000', console.log('servidor está funcionando'))