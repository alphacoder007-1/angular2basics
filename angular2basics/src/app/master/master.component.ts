import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: []
})
export class MasterComponent implements OnInit,OnChanges,OnDestroy,DoCheck {
 company: string ;
  constructor() {
    this.company="Dot Net Karma";
    console.log("MASTER:constructor ");
   }

  ngOnInit() {
    console.log("Master:ngOnInit ");
  }
  ngOnChanges()
  {
    console.log("Master:ngOnChanges ");
  }

  ngOnDestroy()
  {
    console.log("Master:ngOnDestroy ");
  }

  ngDoCheck()
  {
    console.log("Master:ngDoCheck ");
    
  }

  ReceiveMessage(data:string)
  {
      alert(data);
  }

}
