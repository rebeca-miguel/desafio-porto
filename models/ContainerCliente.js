const mongoose = require("mongoose")

const ClienteSchema = new mongoose.Schema({
    cliente:{
        type:String
    },
    nContainer:{
        type:String, 
        required: true,
        unique: true,
    },
    tipo:{
        type:String,
        required: true,
    
    },
    Status: {
        type:String,
        required: true,
        default: "cheio"
    },
    
    Categoria: {
        type:String,
        required: true,
    },
    idMov:{
        type:[String],
    }
},
    {timestamps: true}
)
module.exports = mongoose.model("Cliente", ClienteSchema)