const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//mandar los productos al cliente
router.get('/', async (req, res) => {
    
    var prodList = [];
    const snapshot = await db.collection('productos').get();
    snapshot.forEach((doc) =>{
        prodList.push(doc.data());
        //console.log(doc.data())
    });
    res.json(prodList);
    //console.log(prodList);
    res.end();
});

//agrega un producto al carrito
router.post('/', async (req, res) => {
    datoReq = req.body;
    //Se busca si el producto ya esta en el carrito y si lo esta este se suma valor anterior
    const snapshot = await db.collection('usuarios').doc(datoReq.email).collection('carrito').get();
    var estado = "nuevo";
    snapshot.forEach((doc) => {
        if ( datoReq.producto.id == doc.data().id){
            id = doc.data().id + "";
            total = datoReq.producto.quantity + doc.data().quantity;
            const prod = db.collection('usuarios').doc(datoReq.email).collection('carrito').doc(id);
            prod.update( { quantity : total } );
            estado = "viejo";
        }
    });
    //si el producto no estaba en el carrito entonces se agrega
    if(estado == "nuevo"){
        const id = datoReq.producto.id + "";
        const obj = db.collection('usuarios').doc(datoReq.email).collection('carrito').doc(id);
        obj.set(datoReq.producto);
    }
    res.status(200).send("Producto agregado al carrito");
});

module.exports = router;