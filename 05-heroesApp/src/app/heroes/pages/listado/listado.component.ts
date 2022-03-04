import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heroes=resp;
      } );

  }

}
