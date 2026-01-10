import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- obligatoire pour ngFor, ngStyle
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";

interface Satellite {
  title: string;
  description: string;
  x?: number; // position calculée
  y?: number;
}

@Component({
  selector: 'app-community-program',
  templateUrl: './community-program.component.html',
  styleUrls: ['./community-program.component.scss'],
  imports: [MatCardModule, CommonModule, BreadcrumbComponent],
  standalone: true,
  providers: []
})
export class CommunityProgramComponent {

@ViewChild('partnership', { static: true }) partnership!: ElementRef;

// imageSize = window.innerWidth * 0.2; // 20vw
// radius = this.imageSize / 2 + 65; // 150px d’écart minimum pour que les satellites ne soient pas cachés

  satellites: Satellite[] = [
    { title: 'Valeur pour les membres', description: 'En savoir plus' },
    { title: 'Mode de contribution', description: 'Interventions légères et ponctuelles\nLiberté totale de participation' },
    { title: 'Périmètre d’intervention', description: 'En savoir plus' },
    { title: 'Mission principale', description: 'Apporter un regard expert et indépendant pour évaluer, challenger et prioriser les propositions fonctionnelles avant leur intégration dans l’outil.' },
  ];

  constructor() {
    // Calcul des positions x/y pour chaque satellite

    // this.satellites.forEach((satellite, i) => {
    //   const angle = (i / this.satellites.length) * 2 * Math.PI;
    //   satellite.x = this.radius * Math.cos(angle);
    //   satellite.y = this.radius * Math.sin(angle);
    // });
  }


}