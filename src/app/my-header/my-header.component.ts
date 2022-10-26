import { Component, OnInit } from '@angular/core';
import {MyButtonConfig} from "../interface/button/MyButtonConfig";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  buttonConfig!: MyButtonConfig;
  constructor() { }

  ngOnInit(): void {
    this.buttonConfig = {
      customCssClass: 'btn btn-outline-primary me-2',
      text: 'Login',
      icon: 'perm_identity'
    }
  }

}
