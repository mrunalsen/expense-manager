import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [

    HeaderComponent,
    LoginComponent,
    MasterComponent,
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true,
      easing: 'ease-in',
      timeOut: 5000,
      extendedTimeOut: 2000,
    }),
    BrowserAnimationsModule
  ],
  exports: [
    MasterComponent,
    LoaderComponent
  ],
  providers: [
    AuthService,
    LoaderService
  ]
})
export class CoreModule { }