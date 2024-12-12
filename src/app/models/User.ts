export interface User {
  id: string;
  name: string;
  email: string;
  profileImageUrl?: string;
  createdAt: Date;
  preferences?:{
    favoriteExercises?: string[];
    preferredDifficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  };
  stats?:{
    totalWorkouts?: number;
    totalExercises?: number;
  }
}
