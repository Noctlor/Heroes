import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroes): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
