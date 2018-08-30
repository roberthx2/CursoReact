"use strict";
var numeroEstudiantes = 40;
console.log('numeroEstudiantes', numeroEstudiantes);
var cursoIniciado = true;
var nombreCurso = 'Angular desde Cero';
var contenidoCurso = "\n\tHerramientas de Desarrollo\n\tIntroduccion de TypeScript\n\tIntroduccion a Angular\n";
console.log('nombreCurso: ', nombreCurso);
console.log('contenidoCurso: ', contenidoCurso);
var bienvenida = "Bienvenidos al curso " + nombreCurso;
console.log('Bienvenidos', bienvenida);
var arregloA = [1, 2, 3, 4];
console.log('arregloA:', arregloA);
var arregloB;
arregloB = ['a', 'b', 'c'];
console.log('arregloB: ', arregloB);
//TypeScript Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["LUNES"] = 0] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 1] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 3] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 4] = "VIERNES";
})(DiasSemana || (DiasSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log('primerDia:', primerDia);
console.log('primerDia(string):', DiaCurso[0]);
console.log('primerDia(string):', DiaCurso[DiaCurso.MARTES]);
