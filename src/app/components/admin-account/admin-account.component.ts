import { Account } from './../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  account?: Account;

  constructor(
    private accountService : AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPrivateAccountView();
  }

  getPrivateAccountView(): void {
    this.accountService.postAdminAccount()
      .subscribe(
        data => {
          this.account = data;
          console.log(data);
        },
        error => {
          console.log(error);
          this.router.navigate(['/forbidden']);
        });
  }

}
