"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gato;
gato = new gato_1.Gato('Misifu', 'Siames');
console.log('gato: ', gato);
gato.desplazar();
gato.ronronear();
//set nombre
gato.nombre = 'Tom';
//get nombre
console.log('gato.nombre: ', gato.nombre);
gato.ronronear();
