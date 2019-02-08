import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;
  counter: number;

  constructor() {
    this.name = 'Nome';
    this.counter = 0;
  }

  ngOnInit() {
  }

  setName(value: string){
    this.name = value;
    this.counter++;

  }

  incrementCounter() {
    this.counter++;
  }
}
