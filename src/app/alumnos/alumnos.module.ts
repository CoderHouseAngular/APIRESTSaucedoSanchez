import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { BodyComponent } from '../feature/body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NombreCompletoPipe } from '../pipes/NombreCompletoPipe';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    BodyComponent,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AlumnosModule { }
