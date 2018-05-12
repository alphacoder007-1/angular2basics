import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html'
})
export class TemplateformComponent implements OnInit {

  userName:string;

  constructor() { 

    this.userName = "Mahesh Shivaswamy";
  }

  ngOnInit() {
  }

  SaveData(form:NgForm)
  {
    console.log(this.userName);

  }

}
