import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../service/utente/utente.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";
import {AuthService} from "../../service/jwt/auth.service";
import {Utente} from "../../entity/utente";


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  buttonConfig!: MyButtonConfig;
  loginForm: FormGroup;

  msg!: string;

  constructor(private utenteService: UtenteService, private formBuilder: FormBuilder, private router: Router,  private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {

    if(localStorage.getItem('access_token')) {//finchè esiste il token, non si può tornare a /login
      this.router.navigateByUrl("/home");
    }
    this.buttonConfig = {
      text: 'Accedi',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: ''
    }
  }

  onSubmit(): void {
    this.authService.signIn(this.loginForm.value);
  }

}
