export abstract class Animal {
    constructor(protected _nombre:string) {
    }

    set nombre(nombre:string) {
        if(nombre.length <= 3) {
            console.error('Nombre muy corto!', nombre.length);
            return;
        }
        
        this._nombre = nombre;
    }

    get nombre() : string {
        return this._nombre;
    }

    abstract desplazar(): void;
}