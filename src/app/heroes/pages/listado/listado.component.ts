import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`

  `
  ]
})
export class ListadoComponent implements OnInit {

  heroe: Heroes[]=[]

  constructor(private service : HeroesService) { }

  ngOnInit(): void {
    this.service.getheroes().
    subscribe(resp=>{
      this.heroe = resp 
    })
  }



}
