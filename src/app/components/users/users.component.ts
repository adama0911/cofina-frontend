
import { Component, OnInit ,TemplateRef } from '@angular/core';
import { ClientsService }    from '../../services/clients.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {EssenceNg2PrintModule} from "essence-ng2-print";
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  // clients list
  clients: any;
  details: any
  clientsSave: string;
  // details of targeting client
  detailsClient :any;
  // constructor ofthispublic modalRef: BsModalRef; class
  motif: string;
  motif1: string;
  modalRef: BsModalRef;
 //constructor of this class

  printCSS = ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'];

  constructor(public clientsService:ClientsService,private modalService: BsModalService){}

  ngOnInit() {
    this.getClients();
  }
 // function that get the clients
  getClients ():any{
       this.clients = this.clientsService.getclients();
  }

  //func that open modal
  public openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template,{class: 'modal-lg'}); // {3}
  }
  
//func that sort clients list by property
  sorted(event){
      let target: any = event.target;
      if(target.parentElement.classList.contains("dropdup"))
         this.motif1 = null;
      else 
         this.motif1 = target.id;
         
      target.parentElement.classList.toggle("dropdown");;
      target.parentElement.classList.toggle("dropup");
  }

  //change the motif to seah in the list
  changerMotif(event){
      this.motif = event.target.value;
  }

}
