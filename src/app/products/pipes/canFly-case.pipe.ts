import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFly implements PipeTransform {
  transform(canFly:false): string {
    return canFly?"Puede volar":'No puede volar'
  }
}
