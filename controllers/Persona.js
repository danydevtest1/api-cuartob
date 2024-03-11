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
   // getPersona(req,res,next)=>{},
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
       },
       getOnePersona:async (req,res,next)=>{
        try {
         const buscar= await models.Persona.findById(req.params.id);
         res.status(200).json(buscar);
        } catch (error) {
         res.status(500).send({
             message:"No se obtuvo la informacion"
         })
         next(error);
     }
        },
       delPersona:async (req,res,next)=>{
        try {
            await models.Persona.findByIdAndDelete(req.params.id);
            res.status(200).send({
                message: "Datos eliminados correctamente"
            })
        } catch (error) {
            res.status(500).send({
                message:"No se pudo eliminar el dato"
            })
            next(error);
        }
       },

       updatePersona:async(req,res,next)=>{
        try {
            const {nombre,apellidos, correo}=req.body;
  
            const actualizarDatos={
              nombre,apellidos,correo
          };
          
          const actualizar = await models.Persona.findByIdAndUpdate(req.params.id, actualizarDatos);
          res.status(200).json(actualizar);
              
          } catch (error) {
              res.status(500).send({
                  message:"No se pudo realizar la conexion"
              })
              next(error);
          }
       }
    }