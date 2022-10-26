import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], currentPage: number, itemPerPage: number): any[] {

    let data = value;
    let x = data.length/itemPerPage;
    let y = Math.floor(x);
    y = (x > y)? y+1:y;
    if(data.length < itemPerPage) {
      return [data, y];
    } else {
      return [data.slice((currentPage-1) * itemPerPage, (currentPage * itemPerPage)), y];
    }
  }

}
