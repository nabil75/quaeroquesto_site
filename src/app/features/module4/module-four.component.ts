
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-module-two',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './module-four.component.html',
  styleUrls: ['./module-four.component.scss']
})

export class ModuleFourComponent implements OnInit {

  constructor() {}

  item_breadcrumb: string="/module4";

  ngOnInit() {

  }
}

