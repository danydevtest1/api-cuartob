import routerx from 'express-promise-router';
import PersonaC from '../controllers/Persona';

const router=routerx();

router.post('/guardarPersona',PersonaC.postPersona);
router.get('/buscarPersona',PersonaC.getPersona);

export default router;