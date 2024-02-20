
import express from 'express';

import router from "./routes";


const app = express()

app.set('port',process.env.PORT || 4000);



app.use('/api',router);

app.listen(app.get('port'), () => {
  console.log(`Servidor ejecutandose en el puerto:`+app.get('port'))
})
