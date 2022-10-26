import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  //value[0] contiene il nome della colonna da filtrare, value[1] il filtro
  transform(value: any[], data: any[]): any[] {
    if ((value[0] !== '') && (value[1] !== '')) {
      return data.filter(item => item[value[0].toLowerCase()].includes(value[1]));
    } else {
      return data;
    }
  }

}

