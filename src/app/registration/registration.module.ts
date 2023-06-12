import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationPresentationComponent } from './registration-container/registration-presentation/registration-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { ForgetPasswordContainerComponent } from './forget-password-container/forget-password-container.component';
import { ForgetPasswordPresentationComponent } from './forget-password-container/forget-password-presentation/forget-password-presentation.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationContainerComponent,
    RegistrationPresentationComponent,
    ForgetPasswordContainerComponent,
    ForgetPasswordPresentationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }
