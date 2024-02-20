import models from '../models'

export default{

    postPersona:(req,res,next)=>{
        try {
           res.status(200).send({
            message:"Datos enviados"
           })
            
        } catch (error) {
            res.status(500).send({
                message:"No se pudo realizar la conexion"
            })
            next(error);
        }
    },
   // delPersona(req,res,next)=>{},
    getPersona:(req,res,next)=>{
        res.status(200).send({
            message:"Datos encontrados"
        })
    },
    //putPersona(req,res,next)=>{}
}