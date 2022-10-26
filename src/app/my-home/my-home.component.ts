import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  admin!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.admin = false;
  }

}
