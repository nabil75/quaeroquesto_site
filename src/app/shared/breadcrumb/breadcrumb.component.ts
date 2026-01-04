import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: string;
  isCurrent?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'

})
export class BreadcrumbComponent implements OnInit {

   @Input() item_breadcrumb: string | undefined;
   
  items: BreadcrumbItem[] = [];

  constructor() {}

  ngOnInit(): void {

      this.items = [
                    { label: 'Accueil', path: '/home', icon: 'home' },
                    { label: 'Vue d\'ensemble', path: '/global_view', icon: 'dashboard'},
                    { label: 'Questionner', path: '/module1', icon: 'question_answer' },
                    { label: 'Diffuser', path: '/module2', icon: 'send' },
                    { label: 'Exploiter', path: '/module3', icon: 'handyman' },
                    { label: 'Mettre en forme', path: '/module4', icon: 'draw' },
                    { label: 'Partager', path: '/module5', icon: 'share' }
                  ];

  }
}