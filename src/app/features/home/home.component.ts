import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule, MatIconModule, BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor() {}

  item_breadcrumb: string = "/home";

  modules = [
    {
      id: 'global_view',
      title: 'Vue d\'ensemble',
      description: 'Découvrez QuaeroQuesto et ses fonctionnalités',
      icon: 'dashboard',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Violet   
      textDark: false,
      route: '/global_view'
    },
    {
      id: 'module1',
      title: 'Questionner',
      description: 'Création intuitive de questionnaires, assistée par IA',
      icon: 'question_answer',
      color: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', // Bleu clair
      textDark: true,
      route: '/module1'
    },
    {
      id: 'module2',
      title: 'Diffuser',
      description: 'Diffusion simplifiée et intelligente',
      icon: 'send',
      color: 'linear-gradient(135deg, #c8f4e5, #b8e6d3  100%)', // Vert 
      textDark: true,
      route: '/module2'
    },
    {
      id: 'module3',
      title: 'Exploiter',
      description: 'Exploitation approfondie des données',
      icon: 'handyman',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Violet
      textDark: false,
      route: '/module3'
    },
    {
      id: 'module4',
      title: 'Mettre en forme',
      description: 'Mise en forme et génération automatique de rapports',
      icon: 'draw',
      color: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', // Bleu clair
      textDark: true,
      route: '/module4'
    },
    {
      id: 'module5',
      title: 'Partager',
      description: 'Diffusion et partage des rapports',
      icon: 'share',
      color: 'linear-gradient(135deg, #c8f4e5, #b8e6d3 100%)', // Vert
      textDark: true,
      route: '/module5'
    }
  ];
}
  


