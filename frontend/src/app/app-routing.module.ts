import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'track', component: TrackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
