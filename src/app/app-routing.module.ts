import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MasterComponent } from './core/components/master/master.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
