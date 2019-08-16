import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotesFilter'
})

export class QuotesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ?
    value.filter((item, index) => {
      if ((item.type.toLowerCase().indexOf(args.toLowerCase()) !== -1) || (item.section.toLowerCase().indexOf(args.toLowerCase()) !== -1)){
        return true;
      }
    })
    : value;
  }
  
}
