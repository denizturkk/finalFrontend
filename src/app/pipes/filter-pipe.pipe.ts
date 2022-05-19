import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string):Product[]{
    
   
     filterText=filterText?filterText.toLocaleLowerCase():"";
      /*
     if(filterText==null)
      return value;

      else{
        return value.filter((p:Product)=>p.productName.toLocaleLowerCase()
        .indexOf(filterText)!=-1);
      }
    */
      return filterText?
      value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!=-1)
      :value;

    };
  }


