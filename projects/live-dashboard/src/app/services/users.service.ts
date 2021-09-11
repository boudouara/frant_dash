import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public login(authData: any): Observable<any> {
    return this.httpClient.post(`${environment.dataApiUrl}/login`, authData, this.headers);
  }

  public getAccountData(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/account/get`, this.headers);
  }

  public updateAccountData(account: any): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/account/update`, account, this.headers);
  }
}
