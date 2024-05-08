import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = true;
  dnone: string = '';

  constructor() {}

  toggleMessage(): void {
    if (this.dnone == '') {
      this.dnone = 'dnone';
    } else {
      this.dnone = '';
    }
  }

  ngOnInit(): void {}
}
