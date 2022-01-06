const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//mostrar productos en cuenta
router.post('/', async (req, res) => {
    
    const dataReq = req.body;
    const snapshot = await db.collection('usuarios').doc(req.body.email).get()
    .then( info => {
        res.json(info.data());
    });
    res.end();
});
//modificar productos en cuenta
router.put('/', async (req, res) => {
    //res.send('Post Cuenta');
    const dataReq = req.body;
    const datos =  db.collection('usuarios').doc(req.body.email);
    //const user = { ...dataReq, rol : "cliente"};
    await datos.update(dataReq);

    const enviar = { 
        status: 200, 
        message: "Actualizacion exitosa."
    };
    res.json(enviar);
    res.end();
});

module.exports = router;