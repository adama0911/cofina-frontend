import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Event imit if login is succesfull
  @Output() validerEvent  = new EventEmitter();
  //constructor of this class
  constructor() { }

  ngOnInit() {

  }
  //function  who imit event , if login is succesfull
  vilidatoinFunc(){
       this.validerEvent.emit({
            value: true
       });
  }

}
