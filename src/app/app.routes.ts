import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'team',
    component : TeamComponent
  },
];
