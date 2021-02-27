import { Account } from './../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  account?: Account;

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.getPrivateAccountView();
  }

  getPrivateAccountView(): void {
    this.accountService.getPrivate()
      .subscribe(
        data => {
          this.account = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
