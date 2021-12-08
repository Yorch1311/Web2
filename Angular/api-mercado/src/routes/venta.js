const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//completar una venta pendiente
router.put('/', async (req, res) => {
    
    const datoreq = req.body;
    //console.log(datoreq.id_venta);
    const venta = db.collection('ventas').doc(datoreq.id_venta+"");
    await venta.update( { estado : "completada" } );
    //res.status(200).send("Venta completada");
});

//solicitar ventas pendientes
router.get('/', async (req, res) => {
    //const dataReq = req.body;
    var list = [];
    const snapshot = await db.collection('ventas').get();
    snapshot.forEach((doc) => {
        //console.log("Tipo:", valor[pos]);
        if ( doc.data().estado == "pendiente" /* && dataReq.valor == valor[pos]*/){
            total = 0;
            doc.data().productos.forEach(prod => {
                total = total + prod.prize * prod.quantity;
            })
            list.push({...doc.data(), "total": total});
        }
    });
    res.json(list);
    res.end();
    //console.log(list);
});

module.exports = router;