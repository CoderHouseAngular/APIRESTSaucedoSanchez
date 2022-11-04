import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Clase } from 'src/app/models/clases';
import { ClasesServiceService } from 'src/app/services/clases-service.service';

@Component({
  selector: 'app-crud-clases',
  templateUrl: './crud-clases.component.html',
  styleUrls: ['./crud-clases.component.css']
})
export class CrudClasesComponent implements OnInit {

  crudButtonText:string='Agregar';
  public displayedColumns!:string[];
  clases!:Clase[];
  clasesSource!:MatTableDataSource<Clase>;
  claseData!: FormGroup;
  @ViewChild(MatTable) table!: MatTable<any>;
 
  constructor(@Inject(LOCALE_ID) private locale: string,private fb:FormBuilder,private clasesService:ClasesServiceService) { 
    this.claseData=fb.group({
      id:new FormControl(''),
      nombre:new FormControl(''),
      dia:new FormControl('')
    });

    clasesService.getClasesPromise().then((value:Clase[])=>{
      this.clases=value;
      this.clasesSource=new MatTableDataSource<Clase>(this.clases);
      console.log(value);
     }).catch((error:any)=>{
      console.log(error);
     });
  }

  ngOnInit(): void {
    this.displayedColumns=['id','nombre','dia','acciones'];
  }

  crudClase(){
    let id= this.claseData.get('id')?.value;
    console.log(id);
    if(id != '' && id != null){
      let clase=this.clases.find(x=> x.Id==id);
      if(clase!=null){
        clase.Nombre= this.claseData.get('nombre')?.value;
        clase.Dia= new Date(this.claseData.get('dia')?.value);
  
      }

    }
    else{
      this.clases.push(
        {
          Id: this.clases.length > 0 ? this.clases[this.clases.length - 1].Id + 1 : 1,
          Nombre: this.claseData.get('nombre')?.value,
          Dia: new Date(this.claseData.get('dia')?.value)
        }
      );
    }

    
    console.log(this.clases);
    this.table.renderRows();
    this.claseData.reset();
    this.crudButtonText='Agregar';
  }

  editClase(id:number){
    let clase=this.clases.find(x=> x.Id==id)
    this.claseData.setValue({
      'id':clase?.Id,
      'nombre':clase?.Nombre,
      'dia':clase?.Dia,
    });
    this.table.renderRows();
    this.crudButtonText='Editar';
  }

  deleteClase(id:number){
    let index=this.clases.findIndex(x=> x.Id==id);

    this.clases.splice(index,1);

    this.table.renderRows();
    this.claseData.reset();
    this.crudButtonText='Agregar';
  }

}
