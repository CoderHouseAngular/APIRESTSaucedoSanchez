import { Clase } from "./clases";

export interface Curso{
    Id:number;
    Nombre:string;
    Clases: Array<Clase>;
}