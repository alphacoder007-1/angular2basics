import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrdir',
  templateUrl: './attrdir.component.html',
  styles: []
})
export class AttrdirComponent implements OnInit {

  colors:any[];
  color:string;

  constructor() {
    this.colors = ['Red','Green','Blue','Yellow'];
   }

  ngOnInit() {
  }

}
