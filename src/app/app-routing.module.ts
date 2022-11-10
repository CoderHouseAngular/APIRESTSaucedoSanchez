import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CrudClasesComponent } from './feature/crud-clases/crud-clases.component';
import { CursosComponent } from './feature/cursos/cursos.component';
import { LoginComponent } from './login/components/login/login.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: 'alumnos', canActivate: [LoginGuard],
  loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'clases', canActivate: [LoginGuard],
  loadChildren: () => import('./clases/clases.module').then(m => m.ClasesModule)
},
  { path: 'cursos', canActivate: [LoginGuard],
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
},
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
