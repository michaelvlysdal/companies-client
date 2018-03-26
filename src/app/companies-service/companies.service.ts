import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'
import { CompanyListItem, CompanyItem } from '.';

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<CompanyListItem[]> {
    return this.http.get<CompanyListItem[]>(environment.companiesApi);
  }

  getCompanyDetails(id: String): Observable<CompanyItem> {
    return this.http.get<CompanyItem>(`${environment.companiesApi}/${id}`);
  }

  saveCompany(company: CompanyItem) {
    return this.http.post(environment.companiesApi, company);
  }
}
