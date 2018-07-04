import { RouterModule, Routes } from '@angular/router';
import { FlipCardComponent } from './pages/flip-card/flip-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'topics/:id', component: FlipCardComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
