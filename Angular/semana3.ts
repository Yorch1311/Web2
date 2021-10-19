//Campos de una clase
class Punto {
    x: number;// si no se especifica el tipo entonces sera tipo any
    y: number;// ejemplo: x; <- es tipo any
    z  = 0; // se asigna el valor dependiendo lo que ponga, en este caso es number
}

const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;

//classes readonly
class Saludo{
    readonly nombre: string = "mundo";

    constructor(nuevoNombre : string){
        if (!nuevoNombre){
            this.nombre = nuevoNombre;// <- la asignacion es posible en el construntor
        }
    }

    asignarNuevoNombre(nuevoNombre: string){
        //this.nombre = nuevoNombre; // <- marca error porque es tipo readonly
    }
}

//classes constructors
class Punto2 {
    x: number;
    y: number;

    constructor(x = 10, y = 10){
        this.x = x;
        this.y = y;
    }
}

let miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);

//Sobrecarga del constructor

class Punto3 {

    /*constructor(x: number, y: number){

    }   
    constructor(s: string){
        
    }
    constructor(xs: number | string , y?: number){

    }*/
}

//classes super
class Figura{
    lados = 0;
}

class Circulo extends Figura{
    constructor(){
        //this.lados = 2;
        super();
        this.lados = 0;
    }
}

//classes methods
let titulo = "mi graduacion";

class Video{
    titulo: string;// (2)

    constructor(titulo: string){
        this.titulo = titulo;
    }
    reproducir(): void {
        console.log(`${this.titulo} se esta reproduciendo`);
    }

    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo;// hace referencia a la variable afuera de la clase
        this.titulo = nuevoTitulo;// hace referencia a (2)
    }
}

const miVideo = new Video("año nuevo");
miVideo.reproducir();

//classes, setters y getters
class Desfile{
    private _participantes = 0;

    get participantes(): number{
        return this._participantes;
    }
    set participantes(v: number){
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes);

//Classes, herencia
interface Encendible{
    encender(): void;
}
class Televisor implements Encendible{
    encender(): void{
        console.log("El televisor se ha encendido");
    }
}
//Precausiones
interface Verificable{
    verificar(nombre: string): boolean;
}
class NombreVerificable implements Verificable{
    verificar(nombre): boolean{// nombre toma el tipo any porque no le asignamos ningun tipo
        return nombre.toLowerCase();
    }
}

//classses, extends
class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}
class Perro extends Animal{
    ladrar(){
        console.log("El perro ladra");
    }
}
const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();

//classes, sobrecarga
class Padre {
    saludar (){
        console.log("Hola");
    }
}
class Hijo extends Padre {
    
    saludar (nombre?: string){

        if (nombre){
            console.log(`Hola ${nombre}`);
        }else{
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");

//classes, orden de inicializacion de las clases
class Definicion{
    nombre = "definicion";
    constructor(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}
class Implementacion extends Definicion{}  
const d = new Implementacion();

//visivilidad public
class Saludo2 {
    public saludar(){
        console.log("Saludar!");
    }
}
const inst = new Saludo2();
inst.saludar();

//visibilidad protected
class Saludo3{
    protected getDestinatario(){
        return "amigos";
    }
}
class SaludoEspecial extends Saludo3{
    saludar(){
        console.log(`Hola ${this.getDestinatario()}`);
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario();// no se puede acceder

//habilitar los metodos preotegidos
class Base{
    protected m = 10;
}
class Derivada extends Base{
    m = 15;
}
const c = new Derivada();
console.log(c.m);

//visibilidad private
class Base1{
    private x = 0;
}
class Derivada1 extends Base1{
    imprimir(){
        //console.log(this.x);// no se puede acceder a esta variable desde la clase hijo
    }
}

const b = new Base1();
//console.log(b.x);// aqui tampoco se puede acceder

//cross-instance private access
class A{
    private x = 10;

    public imprimir(otra: A){
        console.log(otra.x);// se puede acceder a X porque se esta en la misma clase de la instancia
    }
}
const r = new A();
r.imprimir(new A());

//classes, static members
class MiClase{
    static x = 10;

    static imprimirX(){
        // para acceder a una propiedad estatica utilizaremos this dentro de un metodo estatico
        console.log(`Èl valor de x es: ${this.x}`);
    }
    impprimirX(){
        // para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log(`Èl valor de x es: ${MiClase.x}`);
    }
}
//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();
//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log(`El valor obtenido de x es: ${MiClase.x}`);

const miClase = new MiClase();
miClase.impprimirX();

//classes generics
class caja<T>{
    contenido: T;

    constructor(value: T){
        this.contenido = value;
        console.log(this.contenido);
    }
}
type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({nombre: "Pelota"});
misJuguetes.push({nombre: "Consola"});

const miCajaDeJuguetes: caja<Juguete[]> = new caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const misMaquillaje: Maquillaje[] = [];
misMaquillaje.push({nombre: "Sombras"});
misMaquillaje.push({nombre: "Labial"});

const miCajaDeMaquillaje: caja<Maquillaje[]> = new caja(misMaquillaje);

// classes, this types
class Caja1{
    contenido = "";

    set(valor: string){
        this.contenido = valor;
        return this.contenido;
    }
}
const miCaja: Caja1 = new Caja1();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);

//this como anotacion dentre de los parametros
class Box{
    contenido = "";

    constructor(contenido: string){
        this.contenido = contenido;
    }
    igualQue(otro: this){
        return otro.contenido === this.contenido;
    }
}

const box1 = new Box("Joyas");
const box2 = new Box("Joyas");
const box3 = new Box("maquillaje");

console.log(box1.igualQue(box2));
console.log(box1.igualQue(box3));

class Box2 {
    contenido = "";

    igualQue(otro: this){
        return this.contenido = otro.contenido;
    }
}

class CajaDerivada extends Box2{
    otroContenido = "";
}

const base = new Box2();
const derivada = new CajaDerivada();
//derivada.igualQue(base);// se espera una instancia del tipo CajaDerivada, pero se envio un tipo Box2 asi que marca error

//classes, parameter properties
class Video1{
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web",
    ) {}
}

const miVideo1 = new Video1("vacaciones", 60, "mp4");

console.log(`Mi video de: ${miVideo1.nombre}`);
console.log(`Tiene una duracion de: ${miVideo1.duracion} segundos`);
console.log(`Y el formato es: ${miVideo1.formato}`);

//classes, class expressions
const miClase1 = class<T>{
    contenido: T;

    constructor(v: T){
        this.contenido = v;
    }
};

const miInstancia1 = new miClase1("Un video de 12 minutos");
console.log(`Èl contenido del video es: ${miInstancia1.contenido}`);