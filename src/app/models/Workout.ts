import {Exercise} from './Exercise';

export interface Workout {
  id: string;
  userId: string;
  name: string;
  muscle: string;
  description?: string;
  exercises: Exercise[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
