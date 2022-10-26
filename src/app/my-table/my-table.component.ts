import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../interface/table/MyTableConfig";
import {MyButtonConfigTable} from "../interface/button/MyButtonConfigTable";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() myConfig!: MyTableConfig;
  @Input() data!: any[];
  @Output() clickButton = new EventEmitter<any>;
  filter!: string;
  filterColumn!: string;
  currentPage!: number;
  buttonOnTop: MyButtonConfigTable[] = [];
  buttonOnRow: MyButtonConfigTable[] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.filter = '';
    this.filterColumn = '';
    this.currentPage = 1;
    this.buttonOnTop = this.myConfig.actions.filter(function (a){
      return a.onTop;
    })
    this.buttonOnRow = this.myConfig.actions.filter(function (a){
      return !a.onTop;
    })
  }


  indexSlidingWindow(index: number): boolean {

    if (this.currentPage < 3) {
      return index < 5;
    }
    return (index > this.currentPage - 3) && (index < this.currentPage + 3);
  }

  clickButtonTop(text: string) {

    this.clickButton.emit({action: text});
  }

  clickButtonRow(text: string, item: any) {

    this.clickButton.emit({action: text, row: item});
  }
}
