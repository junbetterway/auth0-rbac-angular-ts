import { Account } from './../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  account?: Account;

  constructor(
    private accountService : AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.guestAccount();
  }

  guestAccount(): void {
    this.accountService.guestAccount()
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
