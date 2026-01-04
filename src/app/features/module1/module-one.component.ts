import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-module-one',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})

export class ModuleOneComponent implements OnInit {

 

  constructor() {}

  item_breadcrumb: string="/module1";

  ngOnInit() {

  }
}
