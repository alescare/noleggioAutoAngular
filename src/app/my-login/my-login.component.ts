import {Component, OnInit} from '@angular/core';
import { UtenteService } from '../service/utente.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  username!: string;
  password!: string;
  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(private utenteService: UtenteService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }


}
