const express = require("express")
const router = express.Router()
const Cliente = require ("../models/ContainerCliente")


router.get("/", async(req, res)=>{
    try{
        const data = await Cliente.find()
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
router.post("/", async(req, res)=>{
    try{

        const body = req.body
        const data = await  new Cliente(body).save()
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
router.post("/export", async(req, res)=>{
    try{

        const body = req.body.url
        const data = await Cliente.find({
            Categoria:body
        })
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
router.post("/import", async(req, res)=>{
    try{

        const body = req.body.url
        const data = await Cliente.find({
            Categoria:body
        })
        res.status(200).json({error: false, data})
    }
    catch(err){
        res.status(400).json({error: true, message: err.message})
    }

})
module.exports = router
