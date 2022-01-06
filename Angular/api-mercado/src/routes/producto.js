const { Router } = require('express');
const router = Router();
const db = require("./index.js");

//solicitar cantidades de pruductos vendidos
router.post('/', async (req, res) => {
    dataReq = req.body;
    //
    const snapshot = await db.collection('ventas').get();
    var list = [];
    // se obtienen todas los productos vendidos para luego poder sumas sus totales por id
    snapshot.forEach((doc) => {
        var valor = [ doc.data().month, doc.data().year ];
        var pos = 0;//hace referencia a la posicion del arreglo valor, en 0 esta el mes actual y 1 el año
        //el tipo es year o months
        if (dataReq.tipo == "year"){
            pos = 1;
        } 
        //la compra debe estar completada y debe cumplir con el mes/año que nos solicitan para contarse
        if(doc.data().estado == "completada"  && dataReq.valor == valor[pos]){
            //console.log(doc.data().productos);
            list.push( ...doc.data().productos );
        }
    });

    if ( list.length > 0 ){// equivale a que no esta vacio

        var contar = [];

        for (let i = 0; i < list.length; i++){

            if(contar.length == 0){//primera entrada al arreglo
                contar.push(list[i]);
                //console.log(contar);
            }else{
                var match = false;
                /*
                    se recorre el arreglo contar para ver si el id de list conincide con el de contar,
                    si lo hace entonces se suman las cantidades.
                */
                for( let j = 0; j < contar.length; j++){
                    if(list[i].id == contar[j].id){
                        contar[j].quantity = contar[j].quantity + list[j].quantity;
                        match = true;
                        break;
                    }
                }
                // si no coincidio el id con ningun valor de contar entonces se agrega el elemento
                if(match == false){
                    contar.push(list[i]);
                }
            }
        }
        var full = [];
        const snapshot = await db.collection('productos').get();
        var details = [];

        //aqui estan todos los productos existentes
        snapshot.forEach((doc) => {
            details.push( doc.data());
        });

        //console.log(details);

        //se concatena los datos de los productos con las cantidades vendidas
        for(i in details){
            const { name, medida, img, description } = details[i];
            for ( j in contar){
                if (contar[j].id == details[i].id){
                    contar[j] = { ...contar[j], name, medida, img, description };
                }
            }
        }
        //console.log(contar);
        res.json(contar);
    }else{
        res.status(400).send("No hay ventas en esos rangos.");
    }
});

module.exports = router;