import { Account } from './../models/account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  
  constructor(private http: HttpClient) { }

  postAdminAccount(): Observable<Account> {
    return this.http.post(`${env.api.serverUrl}/api/account`, { name: 'Admin Account', balance: 100000 });
  }

  getPrivate(): Observable<Account> {
    return this.http.get(`${env.api.serverUrl}/api/account`);
  }

}
