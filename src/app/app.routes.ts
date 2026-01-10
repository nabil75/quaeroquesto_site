import { Routes } from '@angular/router';
import { ModuleOneComponent } from './features/module1/module-one.component';
import { HomeComponent } from './features/home/home.component';
import { GlobalViewComponent } from './features/global_view/global-view.component';
import { ContactComponent } from './features/contact/contact.component';
import { ModuleTwoComponent } from './features/module2/module-two.component';
import { ModuleThreeComponent } from './features/module3/module-three.component';
import { ModuleFourComponent } from './features/module4/module-four.component';
import { ModuleFiveComponent } from './features/module5/module-five.component';
import { CommunityProgramComponent } from './features/community-program/community-program.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'quaeroquesto', component: HomeComponent, title: 'Accueil' },  { path: 'home', component: HomeComponent, title: 'Accueil' },
  { path: 'global_view', component: GlobalViewComponent, title: 'Vue Générale' },
  { path: 'module1', component: ModuleOneComponent, title: 'Questionner' },
  { path: 'module2', component: ModuleTwoComponent, title: 'Diffuser' },
  { path: 'module3', component: ModuleThreeComponent, title: 'Exploiter' },
  { path: 'module4', component: ModuleFourComponent, title: 'Mettre en forme' },
  { path: 'module5', component: ModuleFiveComponent, title: 'Partager'},
  { path: 'community', component: CommunityProgramComponent, title: 'Communauté' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'community', component: CommunityProgramComponent, title: 'Community program' },
  { path: '**', redirectTo: '' }
];
