import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ip'
})
export class IpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
