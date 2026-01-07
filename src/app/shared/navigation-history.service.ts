import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationHistoryService {
  // Dernière URL visitée qui n'est pas la page de contact
  private lastNonContactUrl: string = '/home';

  

  constructor() {

  }

  getPreviousUrl(): string {
    return this.lastNonContactUrl;
  }

  setPreviousUrl(lastUrl: string){
    this.lastNonContactUrl = lastUrl;
  }
}

