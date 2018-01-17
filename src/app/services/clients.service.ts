import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

   public clients: any =   [
                               {num:1,prenom:"adama",nom:"goudiaby",adresse:"my adresse",telephone:"776537639",charge:"magor sy"},
                               {num:2,prenom:"magor",nom:"sy",adresse:"my adresse",telephone:"776537639",charge:"adama foudiaby"}
                          ];
  constructor() { }

  getclients(): any{ return this.clients;}

  getdetailes(id:number): any{}

}
