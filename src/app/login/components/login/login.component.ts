import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alumnoData!:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService) { 

    this.alumnoData=this.fb.group({
      matricula:new FormControl('',[Validators.required])
    });

  }

  ngOnInit(): void {
  }

  login(){
    let matricula= this.alumnoData.get('matricula')?.value;
    if(matricula!=''){
      console.log(matricula);
      this.loginService.userLogin(matricula);
    }
  else{
    alert('Matricula no existente');
}
  }

}
