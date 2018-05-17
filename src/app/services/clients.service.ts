import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

      clients: any =   [
              {
                intitule:'mon titre',
                numero:1,
                num:1,
                prenom:"adama",
                nom:"goudiaby",
                adresse:"my adresse",
                telephone:"776537639",
                fixe: '339659455',
                charge:"magor sy",
                juridique: 'ma forme juridique',
                siege: 'Bbs investe',
                email: 'fdfdf@dfd.cme',
                demandeCredi:'Fonds de roulement',
                montantCredit:'99999999999',
                DureeDemande: '9',
                detailsDemande:' A l’attention de Monsieur le Directeur Général de .......................................................................<br/>Monsieur,<br/>Je viens par la présente solliciter un crédit  auprès de votre institution.<br/>Ce prêt d’un montant de ..........................................................................................FCFA remboursable  sur une durée <br/>de..........................mois, me permettra de...........................................................................................................................<br />..............................................................................................................................................................................................................<br/>..............................................................................................................................................................................................................<br/>En espérant recevoir une suite favorable à ma demande, je vous prie d’agréer Monsieur le Directeur Général mes <br/>salutations les meilleures.'
              }
       ];

  

  constructor() { }

  getclients(): any{ return this.clients;}

}
