import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, show: boolean = false ): string {
      return show ? value : '*'.repeat(value.length);

  }

}
