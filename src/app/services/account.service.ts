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

  guestAccount(): Observable<Account> {
    return this.http.get(`${env.api.serverUrl}/api/account/guest`);
  }

  systemAccount(): Observable<Account> {
    return this.http.get(`${env.api.serverUrl}/api/account/system`);
  }

}
