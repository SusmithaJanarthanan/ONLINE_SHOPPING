import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  products:any;
  product:any;

  transform(value:any[],args:any[]): any {
    const min=args[0];
    const max=args[1];

    if(min=='' && max=='')
    {
      console.log(min);
      console.log(max);
      return value;
    }
    else if(min>max)
    {
      console.log(min);
      console.log(max);
      alert("Minimum Price is greater than Maximum Price");
      return value;
    }
    else
    {
      console.log(min);
      console.log(max);
      value=value.filter((item)=>
      item.Prod_Price>=min&&item.Prod_Price<=max);
      console.log(value);
      return value;
      
    }

  }

}
