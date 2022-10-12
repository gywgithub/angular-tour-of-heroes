import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'

// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstore'

  hero: Hero = {
    id: 1,
    name: 'Windstore'
  }

  // heroes = HEROES
  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
    
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
