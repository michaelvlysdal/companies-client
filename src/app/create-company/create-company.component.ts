import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CompanyItem, CompaniesService } from '../companies-service';
import { MatInput, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements AfterViewInit {
  @ViewChild('nameinput', { read: MatInput }) nameinput: MatInput;
  company: CompanyItem;

  constructor(private companiesService: CompaniesService, private snackBar: MatSnackBar, private router: Router) { 
    this.company = new CompanyItem();
  }

  ngAfterViewInit() {
    // settimeout seems to be needed: https://github.com/angular/material2/issues/1474
    setTimeout(() => this.nameinput.focus())
  }

  createSubmit() {
    this.companiesService.saveCompany(this.company)
      .subscribe(
        data => { 
          this.snackBar.open('Company created 😎', undefined, { 
            duration: 1500,
            horizontalPosition: 'start'
          });
        },
        err => {
          this.snackBar.open('Whoops, something went wrong 😡 please try again 🙏', undefined, { 
            duration: 1500,
            horizontalPosition: 'start'
          });
         },
        () => this.router.navigateByUrl('/list')
    );
  }
}
