import {MyHeaders} from './MyHeaders';
import {MyOrders} from './MyOrders';
import {MySearch} from './MySearch';
import {MyPagination} from './MyPagination';
import {MyButtonConfigTable} from "../button/MyButtonConfigTable";

export interface MyTableConfig {
  headers: MyHeaders[];
  order: MyOrders;
  search: MySearch;
  pagination: MyPagination;
  actions: MyButtonConfigTable[];

}
