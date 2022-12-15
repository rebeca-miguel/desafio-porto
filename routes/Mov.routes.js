const express = require("express")
const router = express.Router()
const Mov = require("../models/ContainerMov")
const Cliente = require ("../models/ContainerCliente")

router.get("/", async(req, res)=>{
    try{
        const data = await Mov.find()
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
router.post("/", async(req, res)=>{
    try{

        const body = req.body
        const id = req.body.cId
        const data = await  new Mov(body).save()
        if(data){
            try{
                const cont = await Cliente.findById(id)
                const contentor = {
                    nContainer: cont.nContainer,
                    cliente: cont.cliente,
                    tipo: cont.tipo,
                    status: cont.status,
	                categoria: cont.categoria,
                    idMov:[...cont.idMov, data.tipoMov]
                }
                await Cliente.findByIdAndUpdate(id, contentor)
            }catch(err){
                res.status(400).json({error: true, message: err.message})
            }
        }
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
module.exports = router
