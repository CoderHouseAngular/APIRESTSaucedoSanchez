import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from '../models/clases';

@Injectable({
  providedIn: 'root'
})
export class ClasesServiceService {

  listClasesPromise: Clase[]=[
    {Id:1,Nombre:'Introduccion a Angular',Dia:new Date('2022/09/12')},
    {Id:2,Nombre:'Typescript',Dia:new Date('2022/09/14')},
    ];
   
    
      constructor() { 
        
      }
    
      getClasesPromise():Promise<Clase[] | any>{
        return new Promise((resolve,reject)=>{
    
          if(this.listClasesPromise.length>0){
            resolve(this.listClasesPromise);
          }
          else{
            reject("No hay Clases disponibles");
          }
        });
      }
}
