
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>,args: any[]): any {
    const sortfield =args[0];
    const sortdirection=args[1];
     let multiplier=0;


    if(sortdirection==='desc')
    {
      multiplier=-1;
    }
    else
    {
      multiplier=1;
    }

    value.sort((a: any,b: any)=>{  //negative  // positive
      console.log(sortfield);
      console.log(sortdirection);
      if(a[sortfield]<b[sortfield]) 
      {
        return -1*multiplier;
      }
      else if(a[sortfield]>b[sortfield])
      {
        return 1 * multiplier;
      }
      else
      {
        return 0;
      }
    });
    return value;
  }

}
