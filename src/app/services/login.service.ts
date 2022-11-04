import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login:boolean=false;
  constructor(private http: HttpClient) {

    
   }

   userLogin(){
    let alumno=this.http.get<Alumno>('https://635b17776f97ae73a63caff7.mockapi.io/angular/alumnos/1');

    if(alumno!=null){
      this.login=true;
    }
    else{
      this.login=false;
    }
   }

   isLoggedIn() {
   
    return this.login; 

  }
}
