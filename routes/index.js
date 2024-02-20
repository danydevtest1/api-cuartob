import routerx from 'express-promise-router';
import PersonaR from './Persona';

const router = routerx();

router.use('/persona',PersonaR);

export default router;