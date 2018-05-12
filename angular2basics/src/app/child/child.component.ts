import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent extends ParentComponent implements OnInit {

  constructor(http:Http){
    super(http);
    console.log("child:constructor");
   
  }
ngOnInit()
{
  console.log("child:ngOnInit");
  console.log(this.http);
}
}
