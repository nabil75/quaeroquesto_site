import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { NavigationHistoryService } from '../../shared/navigation-history.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule, BreadcrumbComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  item_breadcrumb: string = "/contact";

  // Vous pouvez modifier ces valeurs facilement plus tard
  email: string = "nabil.belcaid@quaeroquesto.com";
  phone: string = "+33 (0)6 21 71 27 12";

  constructor(
    private navigationHistory: NavigationHistoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  closeContact(): void {
    const target = this.navigationHistory.getPreviousUrl();
    this.router.navigateByUrl(target);
  }
}

