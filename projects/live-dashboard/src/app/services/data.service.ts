import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getDataList(entityId: any, templateId: any): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/data/getAllByTemplateId`, this.headers);
  }

  public addData(entityId: any, templateId: any, data: any): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/data/add/`, data, this.headers);
  }

  public updateData(entityId: any, templateId: any, data: any): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/data/update`, data, this.headers);
  }

  public deleteData(entityId: any, templateId: any, dataId: any): Observable<any> {
    return this.httpClient.delete(`${environment.dataApiUrl}/data/delete`);
  }
}
