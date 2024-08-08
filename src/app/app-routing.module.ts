import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

const routes: Routes = [
  { path: 'enterprise-list', component: EnterprisesListComponent },
  { path: 'enterprise-detail/:id', component: EnterpriseDetailComponent },

  { path: '', component: EnterprisesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
