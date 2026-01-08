import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { MatIconModule } from '@angular/material/icon';
import { RightLeftComponent } from "../../shared/right-left/right-left.component";


@Component({
  selector: 'app-global-view',
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.scss'],
  imports: [BreadcrumbComponent, MatIconModule, RightLeftComponent]
})
export class GlobalViewComponent implements OnInit {

  constructor() { }

  item_breadcrumb: string="/global_view";
  routeToLeft: string="/home"
  routeToRight: string="/module1"

  ngOnInit() {
  }

}
