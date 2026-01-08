
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";

@Component({
  selector: 'app-module-four',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RightLeftComponent],
  templateUrl: './module-four.component.html',
  styleUrls: ['./module-four.component.scss']
})

export class ModuleFourComponent implements OnInit {

  routeToLeft: string="/module3"
  routeToRight: string="/module5"
  item_breadcrumb: string="/module4";

  constructor() {}
  

  ngOnInit() {

  }
}

