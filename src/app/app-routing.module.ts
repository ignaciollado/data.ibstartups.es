import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';

const routes: Routes = [
  { path: 'enterprise-list', component: EnterprisesListComponent },
  { path: '', component: EnterprisesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
