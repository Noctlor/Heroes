import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino:string =""
  heroe : Heroes[] = [];
  heroese: Heroes|undefined;

  constructor(private service:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.service.getSugerencias(this.termino.trim())
    .subscribe(heroe=>this.heroe = heroe);
  }
  opcion(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroese = undefined;
      return
    }
    const hero:Heroes = event.option.value;
    this.termino = hero.superhero;
    this.service.getheroeid(hero.id!)
    .subscribe(heroe=>this.heroese=heroe)
  }

}
