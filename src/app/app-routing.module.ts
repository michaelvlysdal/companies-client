import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

const routes: Routes = [
  { path: 'list', component: CompaniesListComponent },
  { path: 'create', component: CreateCompanyComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
