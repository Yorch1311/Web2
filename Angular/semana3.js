var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Campos de una clase
var Punto = /** @class */ (function () {
    function Punto() {
        this.z = 0; // se asigna el valor dependiendo lo que ponga, en este caso es number
    }
    return Punto;
}());
var miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;
//classes readonly
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "mundo";
        if (!nuevoNombre) {
            this.nombre = nuevoNombre; // <- la asignacion es posible en el construntor
        }
    }
    Saludo.prototype.asignarNuevoNombre = function (nuevoNombre) {
        //this.nombre = nuevoNombre; // <- marca error porque es tipo readonly
    };
    return Saludo;
}());
//classes constructors
var Punto2 = /** @class */ (function () {
    function Punto2(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Punto2;
}());
var miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);
//Sobrecarga del constructor
var Punto3 = /** @class */ (function () {
    function Punto3() {
    }
    return Punto3;
}());
//classes super
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        var _this = 
        //this.lados = 2;
        _super.call(this) || this;
        _this.lados = 0;
        return _this;
    }
    return Circulo;
}(Figura));
//classes methods
var titulo = "mi graduacion";
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproduciendo");
    };
    Video.prototype.asignarTitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo; // hace referencia a la variable afuera de la clase
        this.titulo = nuevoTitulo; // hace referencia a (2)
    };
    return Video;
}());
var miVideo = new Video("año nuevo");
miVideo.reproducir();
//classes, setters y getters
var Desfile = /** @class */ (function () {
    function Desfile() {
        this._participantes = 0;
    }
    Object.defineProperty(Desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return Desfile;
}());
var desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes);
var Televisor = /** @class */ (function () {
    function Televisor() {
    }
    Televisor.prototype.encender = function () {
        console.log("El televisor se ha encendido");
    };
    return Televisor;
}());
var NombreVerificable = /** @class */ (function () {
    function NombreVerificable() {
    }
    NombreVerificable.prototype.verificar = function (nombre) {
        return nombre.toLowerCase();
    };
    return NombreVerificable;
}());
//classses, extends
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
//classes, sobrecarga
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (nombre) {
            console.log("Hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
//classes, orden de inicializacion de las clases
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definicion";
        console.log("Mi nombre es " + this.nombre);
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
//visivilidad public
var Saludo2 = /** @class */ (function () {
    function Saludo2() {
    }
    Saludo2.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo2;
}());
var inst = new Saludo2();
inst.saludar();
//visibilidad protected
var Saludo3 = /** @class */ (function () {
    function Saludo3() {
    }
    Saludo3.prototype.getDestinatario = function () {
        return "amigos";
    };
    return Saludo3;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola " + this.getDestinatario());
    };
    return SaludoEspecial;
}(Saludo3));
var saludo = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario();// no se puede acceder
//habilitar los metodos preotegidos
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base));
var c = new Derivada();
console.log(c.m);
//visibilidad private
var Base1 = /** @class */ (function () {
    function Base1() {
        this.x = 0;
    }
    return Base1;
}());
var Derivada1 = /** @class */ (function (_super) {
    __extends(Derivada1, _super);
    function Derivada1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada1.prototype.imprimir = function () {
        //console.log(this.x);// no se puede acceder a esta variable desde la clase hijo
    };
    return Derivada1;
}(Base1));
var b = new Base1();
//console.log(b.x);// aqui tampoco se puede acceder
//cross-instance private access
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimir = function (otra) {
        console.log(otra.x); // se puede acceder a X porque se esta en la misma clase de la instancia
    };
    return A;
}());
var r = new A();
r.imprimir(new A());
//classes, static members
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        // para acceder a una propiedad estatica utilizaremos this dentro de un metodo estatico
        console.log("\u00C8l valor de x es: " + this.x);
    };
    MiClase.prototype.impprimirX = function () {
        // para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log("\u00C8l valor de x es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();
//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log("El valor obtenido de x es: " + MiClase.x);
var miClase = new MiClase();
miClase.impprimirX();
//classes generics
var caja = /** @class */ (function () {
    function caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return caja;
}());
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
var miCajaDeJuguetes = new caja(misJuguetes);
var misMaquillaje = [];
misMaquillaje.push({ nombre: "Sombras" });
misMaquillaje.push({ nombre: "Labial" });
var miCajaDeMaquillaje = new caja(misMaquillaje);
// classes, this types
var Caja1 = /** @class */ (function () {
    function Caja1() {
        this.contenido = "";
    }
    Caja1.prototype.set = function (valor) {
        this.contenido = valor;
        return this.contenido;
    };
    return Caja1;
}());
var miCaja = new Caja1();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
//this como anotacion dentre de los parametros
var Box = /** @class */ (function () {
    function Box(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Box.prototype.igualQue = function (otro) {
        return otro.contenido === this.contenido;
    };
    return Box;
}());
var box1 = new Box("Joyas");
var box2 = new Box("Joyas");
var box3 = new Box("maquillaje");
console.log(box1.igualQue(box2));
console.log(box1.igualQue(box3));
var Box2 = /** @class */ (function () {
    function Box2() {
        this.contenido = "";
    }
    Box2.prototype.igualQue = function (otro) {
        return this.contenido = otro.contenido;
    };
    return Box2;
}());
var CajaDerivada = /** @class */ (function (_super) {
    __extends(CajaDerivada, _super);
    function CajaDerivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otroContenido = "";
        return _this;
    }
    return CajaDerivada;
}(Box2));
var base = new Box2();
var derivada = new CajaDerivada();
//derivada.igualQue(base);// se espera una instancia del tipo CajaDerivada, pero se envio un tipo Box2 asi que marca error
//classes, parameter properties
var Video1 = /** @class */ (function () {
    function Video1(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video1;
}());
var miVideo1 = new Video1("vacaciones", 60, "mp4");
console.log("Mi video de: " + miVideo1.nombre);
console.log("Tiene una duracion de: " + miVideo1.duracion + " segundos");
console.log("Y el formato es: " + miVideo1.formato);
//classes, class expressions
var miClase1 = /** @class */ (function () {
    function class_1(v) {
        this.contenido = v;
    }
    return class_1;
}());
var miInstancia1 = new miClase1("Un video de 12 minutos");
console.log("\u00C8l contenido del video es: " + miInstancia1.contenido);
