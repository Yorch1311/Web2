const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//mostrar productos en carrito
router.post('/', async (req, res) => {
    
    const dataReq =  req.body;
    var list = [];
    const snapshot = await db.collection('usuarios').doc(dataReq.email).collection('carrito').get();
    snapshot.forEach((doc) => {
        list.push(doc.data());
    });
    console.log(list);
    res.json( list);
    res.end();
});
//realizar una venta
router.post('/buy', async (req, res) =>{
    const datoReq = req.body;
    const snapshotGet = await db.collection('ventas').get();
    var size = snapshotGet.size;
    size++;

    var list = [];
    const snapshot = await db.collection('usuarios').doc(datoReq.email).collection('carrito').get();
    snapshot.forEach((doc) => {
        list.push(doc.data());//guarda los productos en una lista
        //elimina los productos del carrito para luego agregarlo a la venta
        const borrar = db.collection('usuarios').doc(datoReq.email).collection('carrito').doc(doc.data().id+"").delete();
    });
    //console.log(list);

    const producto = db.collection('ventas').doc(size.toString());
    //console.log(prodList);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    const prods = { 
        id: datoReq.email,
        productos: list,
        estado: "pendiente",
        day: day,
        month: month,
        year: year,
        id_venta : size,
        address: datoReq.address
    };
    //console.log(prods);
    await producto.set(prods);
    res.status(200).send("Registro exitoso.");
    res.end();
});
//modificar productos en carrito
router.put('/', async (req, res) => {

    const dataReq =  req.body;
    
    if(dataReq.productos.length == 0){
        console.log("Se actualizo con 0 productos");
        const carro = await db.collection('usuarios').doc(dataReq.email).collection('carrito').get();
        carro.forEach(doc => {
            const producto = db.collection('usuarios').doc(dataReq.email).collection('carrito').doc(doc.id+"").delete();
        });
    }else{
        console.log("Borrando productos");
        const carro = await db.collection('usuarios').doc(dataReq.email).collection('carrito').get();

        carro.forEach(doc => {
            const producto = db.collection('usuarios').doc(dataReq.email).collection('carrito').doc(doc.id+"").delete();
        });
        setTimeout(
            function agregar(){
                console.log("Agregando productos");
                dataReq.productos.forEach((doc) => {
                    //agrega producto
                    const add = db.collection('usuarios').doc(dataReq.email).collection('carrito').doc(doc.id+"");
                    add.set(doc);
                    console.log(doc);
                });
        },2000);
        
    }
    //res.status(200).send("Registro exitoso.");
    
    res.end();
});

module.exports = router;