import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], currentPage: number, itemPerPage: number): any[] {

    const start = (currentPage - 1) * itemPerPage;
    const end = currentPage * itemPerPage;
    return value.slice(start, end);

  }

}
