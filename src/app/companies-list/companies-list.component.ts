import { Component, OnInit } from '@angular/core';
import { CompanyListItem, CompaniesService } from '../companies-service';
import { MatDialog } from '@angular/material';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companiesList: CompanyListItem[];
  columnsToDisplay = ['companyName'];
  loading = true;

  constructor(private companiesService: CompaniesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.companiesService.getCompanies()
      .subscribe(companies => {
        this.companiesList = companies;
        this.loading = false;
      });
  }

  openDetails(id: String) {
    this.dialog.open(CompanyDetailsComponent, {
      height: '400px',
      width: '600px',
      data: { id: id }
    });
  }
}
