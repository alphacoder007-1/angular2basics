import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: []
})
export class DirectiveComponent implements OnInit {
num:number;
alphabet:  string;
colors:any;

  constructor() {
    this.num = 1;
    this.alphabet;
    this.colors = ['Red','Green','Blue']
   }

  ngOnInit() {
  }

}
