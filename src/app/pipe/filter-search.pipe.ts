import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any[], column: string, filter: string): any[] {
    if ((column !== '') && (filter !== '')) {
      return value.filter(item => item[column].includes(filter));
    } else {
      return value;
    }

  }

}

