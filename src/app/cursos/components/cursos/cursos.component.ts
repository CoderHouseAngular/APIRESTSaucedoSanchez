import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CursosServiceService } from 'src/app/services/cursos-service.service';
import { Curso } from '../../../models/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  crudButtonText:string='Agregar';
  public displayedColumns!:string[];
  Cursos!:Curso[];
  CursosSource!:MatTableDataSource<Curso>;
  cursoData!: FormGroup;
  @ViewChild(MatTable) table!: MatTable<any>;
 
  constructor(private fb:FormBuilder,private cursosService:CursosServiceService) { 
    this.cursoData=fb.group({
      id:new FormControl(''),
      nombre:new FormControl(''),  
    });

    cursosService.getCursosPromise().then((value:Curso[])=>{
      this.Cursos=value;
      this.CursosSource=new MatTableDataSource<Curso>(this.Cursos);
      console.log(value);
     }).catch((error:any)=>{
      console.log(error);
     });
  }

  ngOnInit(): void {
    this.displayedColumns=['id','nombre','clases','acciones'];
  }

  crudCursos(){
    let id= this.cursoData.get('id')?.value;
    console.log(id);
    if(id != '' && id != null){
      let clase=this.Cursos.find(x=> x.Id==id);
      if(clase!=null){
        clase.Nombre= this.cursoData.get('nombre')?.value;;
  
      }

    }
    else{
      this.Cursos.push(
        {
          Id: this.Cursos.length > 0 ? this.Cursos[this.Cursos.length - 1].Id + 1 : 1,
          Nombre: this.cursoData.get('nombre')?.value,
          Clases:[{Id:1,Nombre:'Tutorial Angular',Dia:new Date('2022/09/12')}]
        }
      );
    }

    
    console.log(this.Cursos);
    this.table.renderRows();
    this.cursoData.reset();
    this.crudButtonText='Agregar';
  }

  editCurso(id:number){
    let curso=this.Cursos.find(x=> x.Id==id)
    this.cursoData.setValue({
      'id':curso?.Id,
      'nombre':curso?.Nombre
    });
    this.table.renderRows();
    this.crudButtonText='Editar';
  }

  deleteCurso(id:number){
    let index=this.Cursos.findIndex(x=> x.Id==id);

    this.Cursos.splice(index,1);

    this.table.renderRows();
    this.cursoData.reset();
    this.crudButtonText='Agregar';
  }

}
