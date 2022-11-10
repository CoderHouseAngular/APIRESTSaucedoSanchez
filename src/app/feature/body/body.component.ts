import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { formatDate } from '@angular/common';
import { AlumnoServiceService } from '../../services/alumno-service.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  crudButtonText:string='Agregar';
  public displayedColumns!:string[];
  alumnos!:Alumno[];
  alumnosSource!:MatTableDataSource<Alumno>;
  alumnoData!: FormGroup;
  @ViewChild(MatTable) table!: MatTable<any>;
 
  constructor(@Inject(LOCALE_ID) private locale: string,private fb:FormBuilder,private alumnoService:AlumnoServiceService) { 
    this.alumnoData=fb.group({
      matricula:new FormControl(''),
      nombres:new FormControl('',[Validators.required]),
      apellidos:new FormControl('',[Validators.required]),
      fechaNacimiento:new FormControl(new Date('1990/01/01'),[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      genero:new FormControl('',[Validators.required]),
      activo:new FormControl(true),
    });

    alumnoService.getAlumnosPromise().then((value:Alumno[])=>{
      this.alumnos=value;
      this.alumnosSource=new MatTableDataSource<Alumno>(this.alumnos)
      console.log(value);
     }).catch((error:any)=>{
      console.log(error);
     });
  }

  ngOnInit(): void {
    this.displayedColumns=['genero','nombre-completo','edad','email','activo','acciones'];
  }

  crudAlumno(){
    let matricula= this.alumnoData.get('matricula')?.value;
    console.log(matricula);
    if(matricula != '' && matricula != null){
      let alumno=this.alumnos.find(x=> x.Matricula==matricula);
      if(alumno!=null){
        alumno.Nombre= this.alumnoData.get('nombres')?.value;
        alumno.Apellidos= this.alumnoData.get('apellidos')?.value;
        alumno.FechaNacimiento= new Date(this.alumnoData.get('fechaNacimiento')?.value);
        alumno.Email= this.alumnoData.get('email')?.value;
        alumno.Genero= this.alumnoData.get('genero')?.value;
        alumno.Activo= this.alumnoData.get('activo')?.value;
      }

    }
    else{
      this.alumnos.push(
        {
          Matricula: this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].Matricula + 1 : 1,
          Nombre: this.alumnoData.get('nombres')?.value,
          Apellidos: this.alumnoData.get('apellidos')?.value,
          FechaNacimiento: new Date(this.alumnoData.get('fechaNacimiento')?.value),
          Email: this.alumnoData.get('email')?.value,
          Genero: this.alumnoData.get('genero')?.value,
          Activo: this.alumnoData.get('activo')?.value,
          Pass:this.alumnoData.get('pass')?.value,
        }
      );
    }

    
    console.log(this.alumnos);
    this.table.renderRows();
    this.alumnoData.reset();
    this.crudButtonText='Agregar';
  }

  editAlumno(matricula:number){
    let alumno=this.alumnos.find(x=> x.Matricula==matricula)
    this.alumnoData.setValue({
      'matricula':alumno?.Matricula,
      'nombres':alumno?.Nombre,
      'apellidos':alumno?.Apellidos,
      'fechaNacimiento': formatDate(alumno!.FechaNacimiento, 'yyyy-MM-dd',this.locale),
      'email':alumno?.Email,
      'genero':alumno?.Genero ,
      'activo':alumno?.Activo ,
    });
    this.table.renderRows();
    this.crudButtonText='Editar';
  }

  deleteAlumno(matricula:number){
    let index=this.alumnos.findIndex(x=> x.Matricula==matricula);

    this.alumnos.splice(index,1);

    this.table.renderRows();
    this.alumnoData.reset();
    this.crudButtonText='Agregar';
  }

  calculateAge(fechaNacimiento: Date):string { 
    var ageDifMs = Date.now() - fechaNacimiento.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
}

}
