const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//enviar datos para logearse
router.post('/', async (req, res) => {

    const datoReq = req.body;
    await db.collection('usuarios').doc(datoReq.email).get()
    .then(doc => {
        if (doc.exists){
            if ( datoReq.email == doc.data().email && datoReq.password == doc.data().password ){
                const enviar = { id: doc.id, rol: doc.data().rol};
                res.status(200).send(enviar);
            }else{
                res.status(400).send("Los datos no coinciden");
            }
        }else{
            res.status(400).send("El usuario no esta registrado");
        }
    });
    
    res.end();
});




module.exports = router;