
import { Component, OnInit ,TemplateRef } from '@angular/core';
import { ClientsService }    from '../../services/clients.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  // clients list
  public clients       : any;
  private clientsSave  : string;
  // details of targeting client
  public detailsClient :any;
  // constructor ofthispublic modalRef: BsModalRef; class
  public motif:string;
  public motif1:string;
  public modalRef: BsModalRef;
 //constructor of this class
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
