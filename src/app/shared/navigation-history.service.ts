import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationHistoryService {
  // Dernière URL visitée qui n'est pas la page de contact
  private lastNonContactUrl: string = '';
  

  constructor() {
    const valeurStockee = sessionStorage.getItem('previousUrl');
    if (valeurStockee) {
      this.lastNonContactUrl = valeurStockee;
    }
  }
  
  getPreviousUrl(): string {
    return this.lastNonContactUrl;
  }

  setPreviousUrl(lastUrl: string){
    this.lastNonContactUrl = lastUrl;
  }

}

