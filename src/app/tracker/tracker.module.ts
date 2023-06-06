import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerService } from './tracker.service';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrackerContainerComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TrackerService
  ]
})
export class TrackerModule { }
