import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Entity } from '../model/entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }).append('Access-Control-Allow-Origin', 'http://localhost:7777')
    .append('Access-Control-Allow-Credentials', 'true')
  };

  constructor(private httpClient: HttpClient) { }

  public getEntitiesCount(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/entities_count`, this.headers);
  }

  public getEntities(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/entities`, this.headers);
  }

  public addEntity(entity: Entity): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/entities/add/`, entity, this.headers);
  }

  public editEntity(entity: Entity): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/entities/add/${entity.id}`, entity, this.headers);
  }

  public deleteEntity(entityId: any): Observable<any> {
    return this.httpClient.delete(`${environment.dataApiUrl}/entities/delete/${entityId}`, this.headers);
  }

}
