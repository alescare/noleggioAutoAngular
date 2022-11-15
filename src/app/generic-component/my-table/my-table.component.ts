import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges} from '@angular/core';
import {MyTableConfig} from "../../interface/table/MyTableConfig";
import {MyButtonConfigTable} from "../../interface/button/MyButtonConfigTable";
import {FilterSearchPipe} from "../../pipe/filter-search.pipe";
import {Utente} from "../../entity/utente";
import {Prenotazione} from "../../entity/prenotazione";
import {Auto} from "../../entity/auto";
import {get} from "lodash";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {

  @Input() myConfig!: MyTableConfig;
  @Input() data!: any;
  @Output() clickButton = new EventEmitter<any>;
  filter!: string;
  filterColumn!: string;
  filterColumnKey!: string;
  currentPage!: number;
  buttonOnTop: MyButtonConfigTable[] = [];
  buttonOnRow: MyButtonConfigTable[] = [];


  constructor(private filterPipe: FilterSearchPipe) {
  }

  ngOnInit(): void {
    this.filterColumnKey = '';
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

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data'].currentValue;
  }


  clickButtonTop(text: string) {

    this.clickButton.emit({action: text});
  }

  clickButtonRow(text: string, item: any) {

    this.clickButton.emit({action: text, row: item});
  }

  changeColumnFilter() {
    this.filter = '';
    const header = this.myConfig.headers.filter((h: any) => h.label === this.filterColumn);
    if (header && header.length > 0) {
      this.filterColumnKey = header[0].key;
    }
  }

  selectItemPerPage() {
    this.currentPage = 1;
  }

  nextPage() {

    const dataFiltered = this.filterPipe.transform(this.data, this.filterColumnKey, this.filter);
    const numberOfPages = dataFiltered.length/this.myConfig.pagination.itemPerPage;
    if (this.currentPage < numberOfPages) {
      this.currentPage += 1;
    }
  }

  getArrayPage() {
    const dataFiltered = this.filterPipe.transform(this.data, this.filterColumnKey, this.filter);
    const numberOfPages = dataFiltered.length/this.myConfig.pagination.itemPerPage;
    const array = Array.from(Array(Math.ceil(numberOfPages)).keys());
    return array;

  }

  getValue(value: any, path: string): string{
    return get(value, path);
  }

}
