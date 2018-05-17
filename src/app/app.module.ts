import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/***************** 
             Components
                                     *******************  */

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';

/***************** 
              Angilar 2/3/4/5 Modules
                                     *******************  */

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgPipesModule } from 'ngx-pipes'
import {EssenceNg2PrintModule} from "essence-ng2-print";


/***************** 
              Services
                                     *******************  */
                                    
import { ClientsService } from './services/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    EssenceNg2PrintModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
