import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms'
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styles: []
})
export class ModelformComponent implements OnInit {
userForm : FormGroup;
  constructor() { 

    this.userForm= new FormGroup({
        name:new FormControl(),
        email:new FormControl()
    })

  }

  ngOnInit() {
  }

  SaveData(form:NgForm)
  {
    console.log(this.userForm.value);
  }
}
