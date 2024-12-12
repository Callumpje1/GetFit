import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'exercises', component: ExercisesComponent },
  { path:'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
