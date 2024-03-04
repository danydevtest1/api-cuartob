import models from '../models'

export default{

    postPersona:async (req,res,next)=>{
        try {
          const {nombre,apellidos, correo}=req.body;

          const guardar=new models.Persona({
            nombre,apellidos,correo
        });

          const enviar= await guardar.save();

           res.status(200).json(enviar);
          
            
        } catch (error) {
            res.status(500).send({
                message:"No se pudo realizar la conexion"
            })
            next(error);
        }
    },
   // delPersona(req,res,next)=>{},
    getPersona:async (req,res,next)=>{
       try {
        const buscar= await models.Persona.find();
        res.status(200).json(buscar);
       } catch (error) {
        res.status(500).send({
            message:"No se obtuvo la informacion"
        })
        next(error);
    }
       }
    }