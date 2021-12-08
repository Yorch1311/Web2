const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//enviar datos para logearse
router.post('/', (req, res) => {

    const datoReq = req.body;
    db.collection('usuarios').doc(datoReq.email+"").get()
    .then(doc => {
        if (doc.exists){
            if ( datoReq.email == doc.data().email && datoReq.password == doc.data().password ){
                const enviar = { 
                    status: 200, 
                    email: doc.data().email, 
                    rol: doc.data().rol, 
                    message: "Datos correctos"
                };
                res.status(200).json(enviar);
            }else{
                const enviar = { 
                    status: 400, 
                    email: "", 
                    rol: "" , 
                    message: "Los datos no coinciden"
                };
                res.status(200).json(enviar);
            }
        }else{
            const enviar = { 
                status: 401, 
                mail: "", 
                rol: "" , 
                message: "El usuario no esta registrado"
            };
            res.status(200).json(enviar);
        }
    });
});




module.exports = router;