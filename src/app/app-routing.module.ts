import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MasterComponent } from './core/components/master/master.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ForgetPasswordContainerComponent } from './registration/forget-password-container/forget-password-container.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'signup', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [AuthGuard],
  },
  {
    path: '', component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'forgot-password', component: ForgetPasswordContainerComponent },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
