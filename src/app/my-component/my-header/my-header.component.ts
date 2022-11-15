import {Component, DoCheck, OnInit} from '@angular/core';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";
import {AuthService} from "../../service/jwt/auth.service";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit, DoCheck {

  buttonConfig!: MyButtonConfig;
  hidden!: boolean;
  username!: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      let utente = JSON.parse(localStorage.getItem('utenteLoggato') as string);
      this.username = utente.username;
      this.hidden = false;
    }

    this.buttonConfig = {
      customCssClass: 'btn btn-outline-dark me-2',
      text: 'Logout',
      icon: 'exit_to_app'
    }

  }

  logout(): void {
    this.authService.doLogout();
  }

  ngDoCheck(): void {
    this.hidden = localStorage.getItem("access_token") === null;
  }
}

