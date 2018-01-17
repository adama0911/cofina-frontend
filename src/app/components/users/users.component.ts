
import { Component, OnInit ,TemplateRef } from '@angular/core';
import { ClientsService }    from '../../services/clients.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  // clients list
  public clients       : any;
  private clientsSave  : string:
  // details of targeting client
  public detailsClient :any;
  // constructor ofthispublic modalRef: BsModalRef; class
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
      this.modalRef = this.modalService.show(template); // {3}
  }
//function of sort clienst by property
  sortList(propety){
        this.clientsSave = this.clients;
        this.clients.sort((a,b) => {
              if(a[propety] > b[propety]) return 1;
              else if (a[propety] == b[propety]) return 0;
              else return -1;
        });
  }

}
