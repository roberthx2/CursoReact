let numeroEstudiantes:number = 40;
console.log('numeroEstudiantes', numeroEstudiantes);

let cursoIniciado:boolean = true;

let nombreCurso:string = 'Angular desde Cero';
let contenidoCurso:string = `
	Herramientas de Desarrollo
	Introduccion de TypeScript
	Introduccion a Angular
`;

console.log('nombreCurso: ', nombreCurso);
console.log('contenidoCurso: ', contenidoCurso);

let bienvenida:string = `Bienvenidos al curso ${nombreCurso}`;
console.log('Bienvenidos', bienvenida);

let arregloA:number[] = [1, 2, 3, 4];
console.log('arregloA:', arregloA);

let arregloB: Array<string>;
arregloB = ['a', 'b', 'c'];
console.log('arregloB: ', arregloB);

//TypeScript Enums
enum DiaCurso {MARTES, VIERNES};
enum DiasSemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES};

let primerDia:DiaCurso;
primerDia = DiaCurso.MARTES;
console.log('primerDia:', primerDia);
console.log('primerDia(string):', DiaCurso[0]);
console.log('primerDia(string):', DiaCurso[DiaCurso.MARTES]);