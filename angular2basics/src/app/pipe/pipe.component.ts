import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {

  employees: any[];

  constructor() {

    this.employees = [
      {name:"Kevin",address:"Charlotte",salary:"10000",joining:new Date()},
      {name:"Josef",address:"Chicago",salary:"12000",joining:new Date()},
      {name:"John",address:"Seattle",salary:"15000",joining:new Date()}      
    ]

   }

  ngOnInit() {
  }

}
