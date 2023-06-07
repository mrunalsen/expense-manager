import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationPresentationComponent } from './registration-container/registration-presentation/registration-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';


@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationContainerComponent,
    RegistrationPresentationComponent
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
