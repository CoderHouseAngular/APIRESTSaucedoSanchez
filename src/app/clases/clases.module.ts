import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { CrudClasesComponent } from './components/crud-clases/crud-clases.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosRoutingModule } from '../alumnos/alumnos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    CrudClasesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ClasesRoutingModule,
    MaterialModule,
    
  ]
})
export class ClasesModule { }
