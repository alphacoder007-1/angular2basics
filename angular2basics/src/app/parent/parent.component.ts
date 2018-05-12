import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  constructor(protected http:Http) {
    console.log("Parent:constructor");
   
   }

  ngOnInit() {
    console.log("Parent:ngOnInit")
  }

}
