import { Injectable } from '@angular/core';
import { Curso } from '../models/cursos';
import { Clase } from '../models/clases';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {
  clases=[{Id:1,Nombre:'Tutorial Angular',Dia:new Date('2022/09/12')}];
  listCursosPromise: Curso[]=[
    {Id:1,Nombre:'Angular',Clases:this.clases}
    ];
   
    
      constructor() { 
        
      }
    
      getCursosPromise():Promise<Curso[] | any>{
        return new Promise((resolve,reject)=>{
    
          if(this.listCursosPromise.length>0){
            resolve(this.listCursosPromise);
          }
          else{
            reject("No hay Cursos disponibles");
          }
        });
      }
}
