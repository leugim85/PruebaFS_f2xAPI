import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA } from '../mocks/general-summary.mock';
import { GeneralSummary } from '../models/general-sumary';
import { enviroment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {
url:string= enviroment.apiServiceUrl;

  constructor(private httpClient: HttpClient) { }

  getSummaryReport(filter: string): Observable<GeneralSummary> {
    return this.httpClient.get<GeneralSummary>(`${this.url}?station=${filter}`);
  }
}
