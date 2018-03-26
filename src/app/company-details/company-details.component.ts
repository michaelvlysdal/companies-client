import { Component, OnInit, Inject } from '@angular/core';
import { CompaniesService, CompanyItem } from '../companies-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyDetails: CompanyItem;
  loading = true;

  constructor(@Inject(MAT_DIALOG_DATA) public input: any, private companiesService: CompaniesService, public dialogRef: MatDialogRef<CompanyDetailsComponent>) { }

  ngOnInit() {
    this.companiesService.getCompanyDetails(this.input.id)
      .subscribe(c => {
        this.companyDetails = c
        this.loading = false;
      });
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}
