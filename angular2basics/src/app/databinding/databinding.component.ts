import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit {

  company : string;
  name: string;
  url: string;

  constructor() { 
    this.company = "Dot Net Karma"
    this.name = "Mahesh"
    this.url = "https://dotnetkarma.blogspot.in"
  }

  Greet()
  {
    alert("Welcome "+ this.name);
  }

  ngOnInit() {
  }
}
