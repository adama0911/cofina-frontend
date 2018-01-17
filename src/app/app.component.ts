import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cofina';
  //for testing if login is ok or no
  public login:boolean = false;

  //unactives login component and actives next component
  vilidationOk(){
      this.login = true;
  }

}
