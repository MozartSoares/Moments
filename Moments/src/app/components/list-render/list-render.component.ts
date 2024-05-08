import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animalDetails: string = '';

  animals: Animal[] = [
    { age: 8, name: 'Tobi', type: 'Dog' },
    { age: 7, name: 'Bob', type: 'Horse' },
    { age: 5, name: 'Tom', type: 'Cat' },
    { age: 2, name: 'Jerry', type: 'Mouse' },
  ];

  constructor(private listService: ListService) {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
