
import { Pipe, PipeTransform } from '@angular/core';

//fernando | toggleCase = ""

@Pipe({
  name: 'toogleCase'
})


export class ToggleCasePipe implements PipeTransform{

  transform(value: string, toUpper:boolean =false):string {
    return (toUpper)? value.toUpperCase():value.toLowerCase();
  }

}
