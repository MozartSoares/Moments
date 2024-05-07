import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  font: string = '12px';
  color: string = 'blue';

  classes: string[] = ['pink-color', 'blue-color', 'small'];

  constructor() {}

  ngOnInit(): void {}
}
