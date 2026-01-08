import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";

@Component({
  selector: 'app-module-three',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RightLeftComponent],
  templateUrl: './module-three.component.html',
  styleUrls: ['./module-three.component.scss']
})

export class ModuleThreeComponent implements OnInit {

  routeToLeft: string="/module2"
  routeToRight: string="/module4"
  item_breadcrumb: string="/module3";

  constructor() {}
  

  ngOnInit() {

  }
}








