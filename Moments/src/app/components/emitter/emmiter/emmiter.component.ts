import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.css'],
})
export class EmmiterComponent implements OnInit {
  myNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
