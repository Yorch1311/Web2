//Funciones, Contructor signature
interface Transporte {
    nombre: string;
}
class Caballo implements Transporte {
    constructor(public nombre: string){}
}
class Automovil implements Transporte {
    constructor(public nombre: string){}
}
type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};
function contruirTrasnporte(ctr: ConstructorDeTransporte, nombre: string){
    return new ctr(nombre);
}

const miCaballo = contruirTrasnporte(Caballo, "Paso Fino");
const miAutomovil = contruirTrasnporte(Automovil, "Toyota");

console.log("Mi caballo se llama "+ miCaballo.nombre);
console.log("Mi automavil es un "+ miAutomovil.nombre);

//Funciones, Parametros opcionales

function f(n: number){
    console.log(n.toFixed());//no se especifican argumentos
    console.log(n.toFixed(3));// aqui se especifica 1
}
//Reproduccion de la unfion de arriba, solo que en typescript
function f2(n?: number){
    //
}
function f3(n = 10){
    //
}

//Parametros opcionales en los callbacks
function miIterador(arr: any[], callback: (arg: any, index?: number) => void){
    for(let i=0; i<=arr.length; i++){
        // aqui es donde el index es opcional o no
        callback(arr[i],i);
    }
}

//Funcones, Overload
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number{
    return x.length;
}

console.log(longitud("hola mundo"));
console.log(longitud([1,2,3,4,5]));

function calcularLongitud(x: any[] | string){
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1,2,3,4,5]));

//Funciones, uso de "This"
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function(){
        this.admin = true;
    }
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    }
};

console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);

//Funciones, Rest parameters
function multiplicar(n: number, ...m: number[]): number{
    return m.reduce((p,c) => {
        return p * c;
    }, n);
}

//Funciones, parameter destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}

const numeros = { a: 1, b: 2, c: 3};
console.log(sumar(numeros));
//Aplicando la destructuracion
function sumar2({ a, b, c}): number {
    return a + b + c;
}

console.log(sumar2({ a: 1, b: 2, c: 3}));

//Onject types
//Anonimos
function saludar(persona: {nombre: string; edad: number}){
    return `Hola ${persona.nombre}`;
}
console.log(saludar({nombre: "Luis", edad: 22}));
//Interfaces
interface Persona {
    nombre: string;
    edad: number;
}

function saludar2(persona: Persona){
    return `Hola ${persona.nombre}`;
}
console.log(saludar2({nombre: "Elena", edad: 25}));
//Alias
type Persona2 = {
    nombre: string;
    edad: number;
}
function saludar3(persona: Persona2){
    return `Hola ${persona.nombre}`;
}
console.log(saludar3({nombre: "Elena", edad: 25}));

//Object types, property modifiers
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led';
    memoria: number;
    procesador: 'intel' | 'amd';
}

function imprimir(computador: Computadora){
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});

//object types, readonly properties
interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = {raza: "Shitzu"};

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

interface Persona1 {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}

const Luis: Persona1 = {edad: 20};
const Pedro: EdadNoEscribible = Luis;

console.log("La edad es: "+ Luis.edad);
Luis.edad++;
console.log("La edad es: "+ Pedro.edad);

//Object types, Externder tipos
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}
interface DireccopmDeUnDepartamento extends Direccion {
    unidad: string;
}

//Extender multiples tipos
interface computadora {
    memoria: string;
    procesador: string;
    hdd: string;
}
interface SO {
    so: string;
    version: string;
}
interface Portatil extends computadora, SO {
    bateria: string;
    monitor: string;
    teclado: string;
}
interface Servidor extends computadora, SO {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
}
const ubuntuServer: Servidor = {
    memoria: "64G",
    procesador: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "trusty",
    conexion: "ethernet",
}
//Object tyoes, intersection types
type Portatil2 = computadora & SO;

const macbookPro20: Portatil2 = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
};

//Object Types, generics
interface Caja<T> {
    contenido: T;
}
let cajaDeString: Caja<string> = { contenido: "hola mundo"};
let cajaDeNumero: Caja<number> = { contenido: 100};
let cajaDeFecha: Caja<Date> = { contenido: new Date()};

type Cajita<T> = {
    contenido: T;
};
let cajaDeString2: Cajita<string> = { contenido: "hola mundo"};
let cajaDeNumero2: Cajita<number> = { contenido: 100};
let cajaDeFecha2: Cajita<Date> = { contenido: new Date()};

//Object Types, array type
const imprimirTareas = (v: Array<string>) => {
    v.forEach((j)=>{
        console.log(j);
    });
};

const misTareas: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);

//Object tyoes, readonlyarray type
const miLista: ReadonlyArray<string> = ["a", "b", "c"];
//miLista.push("d");// No deja ngresar datos a la lista por ser readonly

//Object Types, tuples
type Auto = [string, number];

const prius : Auto = ["Toyota", 2015];
const civic : Auto = ["Honda", 2016];

console.log("El Prius es marca: ",prius[0], " y modelo ", prius[1]);
console.log("El Prius es marca: ",civic[0], " y modelo ", civic[1]);

// rest tuples
type StringNumberBolleans = [string, number, ...boolean[]];
const a: StringNumberBolleans = ["a", 1, true, false, true];

// readonly tuples
type auto = readonly [string, number];

const pros: auto = ["Toyota", 2014];
//pros[0] = "Honda"; //Marca error por se readonly