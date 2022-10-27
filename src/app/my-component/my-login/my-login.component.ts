import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../service/utente/utente.service';
import {FormBuilder} from '@angular/forms';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  buttonConfig!: MyButtonConfig;
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  msg!: string;

  constructor(private utenteService: UtenteService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonConfig = {
      text: 'Accedi',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: ''
    }
  }

  onSubmit(): void {
    let username = (this.loginForm.value.username != null && this.loginForm.value.username != undefined) ? this.loginForm.value.username : '';
    let password = (this.loginForm.value.password != null && this.loginForm.value.password != undefined) ? this.loginForm.value.password : '';
    let u = this.utenteService.cercaUtentePerCredenziali(username, password);
    if (u != null) {
      sessionStorage.setItem('utenteLoggato', username);
      sessionStorage.setItem('admin', '' + u.admin);
      this.router.navigateByUrl("/home");
    }
  }

}
