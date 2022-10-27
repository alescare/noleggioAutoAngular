import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  buttonConfig!: MyButtonConfig;
  visible!: boolean;
  username!: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let username = sessionStorage.getItem('utenteLoggato');
    if(username) {
      this.username = username;
      this.visible = false;
      this.buttonConfig = {
        customCssClass: 'btn btn-outline-dark me-2',
        text: 'Logout',
        icon: 'exit_to_app'
      }
    } else {
      this.visible = true;
    }
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}

