import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from '../feature/cursos/cursos.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosRoutingModule } from '../alumnos/alumnos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    ReactiveFormsModule,
    AlumnosRoutingModule,
    SharedModule,
    CursosRoutingModule,
    MaterialModule
  ]
})
export class CursosModule { }
