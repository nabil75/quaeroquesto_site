
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-module-two',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './module-five.component.html',
  styleUrls: ['./module-five.component.scss']
})

export class ModuleFiveComponent implements OnInit {

  constructor() {}

  item_breadcrumb: string="/module5";

  ngOnInit() {

  }
}
