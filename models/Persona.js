import mongoose from "mongoose";

const persona=new mongoose.Schema({
    nombre:String,
    apellidos:String,
    correo:String,
    modifyDa:{type:Date, default:Date.now}
});

const Personas=mongoose.model('persona',persona);
export default Personas;