import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login:boolean=false;
  constructor(private http: HttpClient,private router: Router) {

    
   }

   userLogin(matricula:number){
   this.http.get<Array<Alumno>>('https://635b17776f97ae73a63caff7.mockapi.io/angular/alumnos/'+matricula).subscribe(
    {
      next: data => {
        console.log(data);
        this.login=true;
        this.router.navigateByUrl('alumnos');
      },
      error: error => {
          console.error('error al conectar', error);
          this.login=false;
      }
  } 
   
    );



    
   }

   userLogout(){
    this.login=false;
  }

   isLoggedIn() {
   
    return this.login; 

  }
}
