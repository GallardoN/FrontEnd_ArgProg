export class Proyectos {
    id?: number;
    nombre: string;
    link: string;
    descripcion: string;

    constructor(nombre: string, link: string, descripcion: string){
        this.nombre = nombre;
        this.link = link;
        this.descripcion = descripcion;
    }

}
