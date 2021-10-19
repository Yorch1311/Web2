var _this = this;
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function contruirTrasnporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = contruirTrasnporte(Caballo, "Paso Fino");
var miAutomovil = contruirTrasnporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automavil es un " + miAutomovil.nombre);
//Funciones, Parametros opcionales
function f(n) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); // aqui se especifica 1
}
//Reproduccion de la unfion de arriba, solo que en typescript
function f2(n) {
    //
}
function f3(n) {
    if (n === void 0) { n = 10; }
    //
}
//Parametros opcionales en los callbacks
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        // aqui es donde el index es opcional o no
        callback(arr[i], i);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));
//Funciones, uso de "This"
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
//Funciones, Rest parameters
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
//Funciones, parameter destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
//Aplicando la destructuracion
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
//Onject types
//Anonimos
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar3({ nombre: "Elena", edad: 25 }));
function imprimir(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
console.log("La edad es: " + Luis.edad);
Luis.edad++;
console.log("La edad es: " + Pedro.edad);
var macbookPro = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español"
};
var ubuntuServer = {
    memoria: "64G",
    procesador: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "ethernet"
};
var macbookPro20 = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina"
};
var cajaDeString = { contenido: "hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
var cajaDeString2 = { contenido: "hola mundo" };
var cajaDeNumero2 = { contenido: 100 };
var cajaDeFecha2 = { contenido: new Date() };
//Object Types, array type
var imprimirTareas = function (v) {
    v.forEach(function (j) {
        console.log(j);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas);
//Object tyoes, readonlyarray type
var miLista = ["a", "b", "c"];
var prius = ["Toyota", 2015];
var civic = ["Honda", 2016];
console.log("El Prius es marca: ", prius[0], " y modelo ", prius[1]);
console.log("El Prius es marca: ", civic[0], " y modelo ", civic[1]);
var a = ["a", 1, true, false, true];
var pros = ["Toyota", 2014];
//pros[0] = "Honda"; //Marca error por se readonly
