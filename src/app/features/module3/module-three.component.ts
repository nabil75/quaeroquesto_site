import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-module-two',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './module-three.component.html',
  styleUrls: ['./module-three.component.scss']
})

export class ModuleThreeComponent implements OnInit {

  constructor() {}

  item_breadcrumb: string="/module3";

  ngOnInit() {

  }
}








