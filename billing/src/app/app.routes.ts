import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'billing',
    pathMatch: 'full',
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./features/billing/billing.module').then((m) => m.BillingModule),
  },
];
