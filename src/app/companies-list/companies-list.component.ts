import { Component, OnInit } from '@angular/core';
import { CompanyListItem, CompaniesService } from '../companies-service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companiesList: CompanyListItem[];
  columnsToDisplay = ['companyName'];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService.getCompanies()
      .subscribe(companies => this.companiesList = companies);
  }

}
