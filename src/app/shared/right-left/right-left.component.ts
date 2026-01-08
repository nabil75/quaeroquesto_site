import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-right-left',
  templateUrl: './right-left.component.html',
  styleUrls: ['./right-left.component.scss'],
  imports: [MatIcon, RouterLink]
})
export class RightLeftComponent implements OnInit {

  @Input() routeToRight: string | undefined;
  @Input() routeToLeft: string | undefined;
  
  constructor() { }

  ngOnInit() {
    
  }

}
