import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesService } from './companies-service/companies.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material'
import { CompanyDetailsComponent } from './company-details/company-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  entryComponents: [
    CompanyDetailsComponent
  ],
  providers: [
    CompaniesService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
