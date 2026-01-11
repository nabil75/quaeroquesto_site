import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- obligatoire pour ngFor, ngStyle
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from "../../shared/breadcrumb/breadcrumb.component";
import { MatIconModule } from "@angular/material/icon";
import { NavigationHistoryService } from '../../shared/navigation-history.service';
import { Router } from '@angular/router';

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
  imports: [MatCardModule, CommonModule, BreadcrumbComponent, MatIconModule, MatButtonModule],
  standalone: true,
  providers: []
})
export class CommunityProgramComponent {




    item_breadcrumb: string = "/community";

  constructor(    
    private navigationHistory: NavigationHistoryService,
    private router: Router
  ) {}



  closeContact(): void {
    const target = this.navigationHistory.getPreviousUrl();
    this.router.navigateByUrl(target);
  }

}