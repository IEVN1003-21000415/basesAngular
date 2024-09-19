import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from './producto';
 
@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {
 
  transform(value: IProducto[], args:string):IProducto[] {
    let filter:string=args ? args.toLocaleLowerCase(): '';
    return filter ? value.filter((product:IProducto)=>
      product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1
   
    ):value;
  }
 
}