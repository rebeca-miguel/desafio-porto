const mongoose = require("mongoose")

const MovSchema = new mongoose.Schema({
    tipoMov:{
        type: String,
        require: true,
    },
    dataInicio: {
        type: String,
        require: true,
    },
    horaInicio: {
        type: Number,
        require: true,
    },
    dataFim: {
        type: String,
        require: true,
    },
    horaFim: {
        type: Number,
        require: true,
    }
},
    {timestamps: true}
)
module.exports = mongoose.model("Mov", MovSchema)