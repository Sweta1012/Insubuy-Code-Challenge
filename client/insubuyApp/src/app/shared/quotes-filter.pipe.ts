import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotesFilter'
})
export class QuotesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ?
    value.filter((item, index) => {
      if ((item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1) || (item.productCode.toLowerCase().indexOf(args.toLowerCase()) !== -1)){
        return true;
      }
    })
    : value;
  }
  
}
