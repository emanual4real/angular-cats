export interface Cat {
  name: string;
  breed: string;
  sex: 'F' | 'M';
  color: string;
  medicalConditions?: string;
  imagePath?: string;
  numberOfPets: number;
  numberOfSquirts: number;
}
