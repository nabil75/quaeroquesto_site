import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-module-two',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss']
})

export class ModuleTwoComponent implements OnInit {

  constructor() {}

  item_breadcrumb: string="/module2";

  ngOnInit() {

  }
}
