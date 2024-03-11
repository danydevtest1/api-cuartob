import routerx from 'express-promise-router';
import PersonaC from '../controllers/Persona';

const router=routerx();

router.post('/guardarPersona',PersonaC.postPersona);
router.get('/buscarPersona',PersonaC.getPersona);
router.get('/buscarOnePersona/:id',PersonaC.getOnePersona);
router.delete('/eliminar/:id',PersonaC.delPersona);
router.patch('/actualizar/:id',PersonaC.updatePersona);

export default router;