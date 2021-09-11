import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Company } from '../model/company';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hZCIsInJvbGUiOiJBRE1JTiIsImlzcyI6IkJ1c2luZXNzTWFuYWdlciIsImlkIjoiMSIsImV4cCI6MTYzMDg4MjM0MywiaWF0IjoxNjMwODcxNTQzfQ._kLPfwqLtZj6OOVDJ8L95pCZhlClDjIQKVk7lgtm_nJVcoyZV6b4LtpO1KaCCbAY9qyMrNU5m1gGdvXdQhBFRw'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getModeratorsCount(): Observable<any> {
    return this.httpClient.get(`${environment.usersApiUrl}/private/count`, this.headers);
  }

  public getAccountData(): Observable<any> {
    return this.httpClient.get(`${environment.dataApiUrl}/account`, this.headers);
  }

  public updateAccountData(account: any): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/update_account`, account, this.headers);
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get(`${environment.usersApiUrl}/users_list`, this.headers);
  }

  public insertModerator(user: User): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/add_user`, user, this.headers);
  }

  public updateModerator(user: User): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/edit_user/${user.id}`, user, this.headers);
  }

  public deleteModerator(userId: any): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/delete/${userId}`, this.headers);
  }

  public getCompanyData(): Observable<any> {
    return this.httpClient.get(`${environment.usersApiUrl}/get_company`, this.headers);
  }

  public updateCompanyData(company: Company): Observable<any> {
    return this.httpClient.post(`${environment.usersApiUrl}/update_company`, company, this.headers);
  }

}
