import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any[], defaultColumn: string, orderType: string): any[] {

    let data = value[0];

    data.sort(function (a: { [x: string]: any; }, b: { [x: string]: any; }) {
      let x = a[defaultColumn.toLowerCase()];
      let y = b[defaultColumn.toLowerCase()];
      if (orderType === 'DESC') {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
      } else {
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
      }
      return 0;
    });

    return data;
  }

}
