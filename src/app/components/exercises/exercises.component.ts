import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Exercise} from '../../models/Exercise';
import {SupabaseService} from '../../services/supabase.service';

@Component({
  selector: 'app-exercises',
  standalone: false,

  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
  exercises$: Observable<Exercise[]> | undefined;

  constructor(private supabaseService: SupabaseService) {
  }

  ngOnInit(): void {
    this.exercises$ = this.supabaseService.getExercises();
  }
}
