import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'
import { CompanyListItem } from '.';

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<CompanyListItem[]> {
    console.log(environment.companiesApi)
    return this.http.get<CompanyListItem[]>(environment.companiesApi)
  }

}
