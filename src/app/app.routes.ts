import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login-component/login-component.component').then(
        (c) => c.LoginComponentComponent
      ),
  },
  {
    path: 'pages/dashboard',
    loadComponent: () =>
      import('./dashboard-component/dashboard-component.component').then(
        (c) => c.DashboardComponentComponent
      ),
  },
  {
    path: 'pages/table',
    loadComponent: () =>
      import('./table/table.component').then((c) => c.TableComponent),
  },
];
