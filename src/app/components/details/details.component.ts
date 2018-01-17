import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  //details of target client
  @Input()  details: any;
  // //Event imit when you wan to unactives details component
  // @Output() fermerModalEvent  = new EventEmitter();
  // //constructor
  constructor() { }

  ngOnInit() {
  }

  // //function  that imit event for  unactives details component
  // fermerModal(){
  //       this.fermerModalEvent.emit({value:"fermer"});
  // }

}
