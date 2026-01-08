import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";

@Component({
  selector: 'app-module-two',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RightLeftComponent],
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss']
})

export class ModuleTwoComponent implements OnInit {
  
  routeToLeft: string="/module1"
  routeToRight: string="/module3"
  item_breadcrumb: string="/module2";

  constructor() {}
  

  ngOnInit() {

  }
}
