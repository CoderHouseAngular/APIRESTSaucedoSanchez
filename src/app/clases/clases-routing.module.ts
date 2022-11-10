import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudClasesComponent } from '../feature/crud-clases/crud-clases.component';

const routes: Routes = [
  {path: 'clases',component: CrudClasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
