import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClasesModule } from './clases/clases.module';
import { CursosModule } from './cursos/cursos.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { BodyComponent } from './alumnos/components/body/body.component';
import { CrudClasesComponent } from './clases/components/crud-clases/crud-clases.component';
import { CursosComponent } from './cursos/components/cursos/cursos.component';
import { LoginComponent } from './login/components/login/login.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: 'alumnos', component: BodyComponent,canActivate: [LoginGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'clases', component: CrudClasesComponent,canActivate: [LoginGuard], },
  { path: 'cursos', component: CursosComponent,canActivate: [LoginGuard], },
  {path: '', redirectTo: 'login',pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
