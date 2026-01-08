
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";

@Component({
  selector: 'app-module-five',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RightLeftComponent],
  templateUrl: './module-five.component.html',
  styleUrls: ['./module-five.component.scss']
})

export class ModuleFiveComponent implements OnInit {

  routeToLeft: string="/module4"
  routeToRight: string=""
  item_breadcrumb: string="/module5";
  constructor() {}

  

  ngOnInit() {

  }
}
