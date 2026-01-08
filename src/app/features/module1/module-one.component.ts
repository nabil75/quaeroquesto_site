import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";

@Component({
  selector: 'app-module-one',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RightLeftComponent],
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})

export class ModuleOneComponent implements OnInit {

  routeToLeft: string="/global_view"
  routeToRight: string="/module2"
  item_breadcrumb: string="/module1";
  
  
  constructor() {}

  

  ngOnInit() {

  }
}
