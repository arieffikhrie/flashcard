import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
