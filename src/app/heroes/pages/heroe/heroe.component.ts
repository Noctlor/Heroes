import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroes } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px; 
    }
  `
  ]
})
export class HeroeComponent implements OnInit {
 
 @Input()heroe!:Heroes;
  constructor(private activate:ActivatedRoute,private service:HeroesService) { }

  ngOnInit(): void {
    this.activate.params.pipe(
      switchMap(({id})=> this.service.getheroeid(id)

      )
    ).subscribe(heroe=>this.heroe=heroe)
  }

}
