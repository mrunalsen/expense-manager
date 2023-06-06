import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';

const routes: Routes = [
  { path: '', component: TrackerContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
