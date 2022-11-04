import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  listAlumnosPromise: Alumno[]=[
    {Matricula:12,Email:'example@example.com',Nombre:'Fulanita',Apellidos:'Doe',FechaNacimiento:new Date('1999/12/25'),Genero:'femenino',Activo:true},
    {Matricula:13,Email:'example2@example.com',Nombre:'Angel Eduardo',Apellidos:'Saucedo Sanchez',FechaNacimiento:new Date('2000/12/09'),Genero:'masculino',Activo:false},
    ];
   
      constructor() { 
        
      }
    
      getAlumnosPromise():Promise<Alumno[] | any>{
        return new Promise((resolve,reject)=>{
    
          if(this.listAlumnosPromise.length>0){
            resolve(this.listAlumnosPromise);
          }
          else{
            reject("No hay alumnos disponibles");
          }
        });
      }
    

  
}
