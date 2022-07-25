import { Component, Input } from '@angular/core';
import { Heroes } from '../../interface/heroes.interface';

@Component({
  selector: 'app-tarjetahero',
  templateUrl: './tarjetahero.component.html',
  styles: [`
      mat-card{
      margin-top:20px;
    } 
  `
  ]
})
export class TarjetaheroComponent  {
  @Input()Heroes!:Heroes;




}
