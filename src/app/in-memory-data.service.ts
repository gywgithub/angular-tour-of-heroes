import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 12,
        name: 'Dr.Nice',
      },
      {
        id: 13,
        name: 'Bombasto',
      },
      {
        id: 14,
        name: 'AAA',
      },
      {
        id: 15,
        name: 'BBB',
      },
      {
        id: 16,
        name: 'Dr.CCC',
      },
      {
        id: 17,
        name: 'Dr.DDD',
      },
      {
        id: 18,
        name: 'Dr.EEE',
      },
      {
        id: 19,
        name: 'Dr.FFF',
      },
      {
        id: 20,
        name: 'Magma',
      },
    ];

    return { heroes };
  }
  constructor() {}

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
