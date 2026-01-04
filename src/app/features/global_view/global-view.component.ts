import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-global-view',
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.scss'],
  imports: [BreadcrumbComponent]
})
export class GlobalViewComponent implements OnInit {

  constructor() { }

  item_breadcrumb: string="/global_view";

  ngOnInit() {
  }

}
