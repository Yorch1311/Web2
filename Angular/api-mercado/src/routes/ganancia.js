const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//solicitar ventas totales
router.get('/', async (req, res) => {
    
    dataReq = req.body;

    const snapshot = await db.collection('ventas').get();
    var list = [];
    // se obtienen todas los productos vendidos para luego poder sumas sus totales por id
    snapshot.forEach((doc) => {
        var valor = [ doc.data().month, doc.data().year ];
        var pos = 0;//hace referencia a la posicion del arreglo valor, en 0 esta el mes actual y 1 el año
        //el tipo es year o month
        if (dataReq.tipo == "year"){
            pos = 1;
        } 
        //la compra debe estar completada y debe cumplir con el mes/año que nos solicitan para contarse
        if(doc.data().estado == "completada"  && dataReq.valor == valor[pos]){
            //console.log(doc.data().productos);
            list.push( doc.data());
        }
    });

    //console.log(list);
    const enviar = [];
    for(i in list){
        var total = 0;
        list[i].productos.forEach((doc)=>{
            console.log(doc);
            total = total + ( doc.prize * doc.quantity );
        });
        const { year, month} = list[i];
        const info = {year, month, total};
        //list[i] = { ...list[i], total };
        enviar.push(info);
    }
    
    //console.log(list);
    res.json(enviar);
    res.end();
});

module.exports = router;