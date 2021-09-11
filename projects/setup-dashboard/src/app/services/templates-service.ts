import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getTemplatesCount(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/templates_count`, this.headers);
  }

  public getTemplates(entityId: any): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/templates/${entityId}`, this.headers);
  }

  public deleteTemplate(templateId: any): Observable<any> {
    return this.httpClient.delete(`${environment.dataApiUrl}/templates/delete/${templateId}`, this.headers);
  }

  public insertTemplate(entityId: any, template: Template): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/templates/add/${entityId}`, template, this.headers);
  }

  public updateTemplate(entityId: any, template: Template): Observable<any> {
    return this.httpClient.patch(`${environment.dataApiUrl}/templates/add/${entityId}`, template, this.headers);
  }
}
