import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getEntitiesAndTemplates(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/entities/full/getAll`, this.headers);
  }

  public getTemplate(templateId: any): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/templates/full/getOneById`, this.headers);
  }
}
