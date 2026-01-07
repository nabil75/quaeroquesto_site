import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent } from "@angular/material/card";
import { RouterLink } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatMenuModule, MatIconModule, MatCard, MatCardContent, RouterLink, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quaeroquesto';
}
