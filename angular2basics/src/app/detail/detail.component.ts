import { Component,Input,OnInit, Output, EventEmitter, OnChanges, DoCheck, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
  @Input() myCompany:string;
  @Output() msg:EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    console.log("Detail: Constructor");
   }

  ngOnInit() {
    console.log("Detail: ngOnInit");
  }

  ngOnChanges()
  {
    console.log("Detail: ngOnChanges");
  }
  
  ngDoCheck()
  {
    console.log("Detail: ngDoCheck");
  }
  ngOnDestroy()
  {
    console.log("Detail: ngOnDestroy");
  }
  send()
  {
    this.msg.emit("Hello, From Detail Component");
  }

}
