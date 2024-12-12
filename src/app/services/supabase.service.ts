import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../environments/environment';
import {catchError, from, map, Observable, throwError} from 'rxjs';
import {Exercise} from '../models/Exercise';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getExercises(): Observable<Exercise[]> {
    return from(this.supabase.from('Exercise').select('*')).pipe(
      map((response: any) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data.map((item:any) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          difficulty: item.difficulty,
          muscleGroup: item.muscleGroup,
          equipment: item.equipment
        }))
      }),
      catchError((error) => {
        console.error('Error fetching exercises:', error);
        throw error;
      })
    );
  }

  // Add a new exercise
  addExercise(exercise: Exercise): Observable<any> {
    return new Observable(observer => {
      this.supabase
        .from('Exercise')
        .insert(exercise)
        .then((response: any) => {
          if (response.error) {
            observer.error(response.error.message);
          } else {
            observer.next(response.data);
            observer.complete();
          }
        })
    }).pipe(
      catchError((error) => {
        console.error('Error adding exercise:', error);
        throw error;
      })
    )
  }
}
