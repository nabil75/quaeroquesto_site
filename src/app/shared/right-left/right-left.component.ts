import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { NavigationHistoryService} from './../navigation-history.service'

@Component({
  selector: 'app-right-left',
  templateUrl: './right-left.component.html',
  styleUrls: ['./right-left.component.scss'],
  imports: [MatIcon, RouterLink]
})
export class RightLeftComponent implements OnInit {

  @Input() routeToRight: string | undefined;
  @Input() routeToLeft: string | undefined;
  
  constructor( private navigationHistory : NavigationHistoryService) { }

  ngOnInit() {
    
  }

  getUrl(url : any){
    this.navigationHistory.setPreviousUrl(url)
  }

}
