const express = require("express");

let rutasHeroes=require("./ROUTES/heroes");
let rutasMain=require("./ROUTES/main");

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

// Ruta /heroes
app.use('/heroes', rutasHeroes);

// Ruta Raíz / ➝ Home
app.use('/', rutasMain);
// Ruta /heroes/n
//app.get("/heroes/detalle/:id", rutasHeroes);

// Ruta /heroes/n/bio
//app.use('/heroes/:id/bio/:ok??',rutasHeroes);

// Ruta Créditos
//app.use("/creditos",rutasMain);

// Ruta... ¿Pára qué sirve esto?
//app.use('*', rutasMain);
