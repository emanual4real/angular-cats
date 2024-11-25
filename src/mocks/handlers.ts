// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { Cat } from '../app/types/cats';

let mockData: Cat[] = [
  {
    name: 'Marbles',
    breed: 'American Shorthair',
    sex: 'F',
    color: 'Grey and white with marbling',
    imagePath: './images/marbles.jpg',
    numberOfPets: 0,
    numberOfSquirts: 0,
  },
  {
    name: 'Torri',
    breed: 'American Longhair',
    sex: 'M',
    color: 'White with grey splotches',
    imagePath: './images/torri.jpg',
    numberOfPets: 0,
    numberOfSquirts: 0,
  },
  {
    name: 'Ceecee',
    breed: 'American Shorthair',
    sex: 'F',
    color: 'Tabby',
    medicalConditions: 'blind',
    imagePath: './images/ceecee.jpg',
    numberOfPets: 0,
    numberOfSquirts: 0,
  },
  {
    name: 'Pepsi',
    breed: 'American Shorthair',
    sex: 'M',
    color: 'Tuxedo',
    medicalConditions: 'Chronic upper respitory',
    imagePath: './images/pepsi.jpg',
    numberOfPets: 0,
    numberOfSquirts: 0,
  },
];

const catsHandler = http.get('/cats', () => {
  return HttpResponse.json(Array.from(mockData));
});

const catPetHandler = http.put('/cats/pet', ({ request }) => {
  const url = new URL(request.url);
  const catName = url.searchParams.get('catName');

  const existingCat = mockData.find((row) => row.name === catName);

  if (existingCat) {
    existingCat.numberOfPets = existingCat.numberOfPets + 1;

    mockData = mockData.filter((row) => row.name !== catName);
    mockData.push(existingCat);

    return HttpResponse.json(existingCat);
  }

  return new HttpResponse(null, { status: 404, statusText: 'Cat not found' });
});

export const handlers = [catsHandler, catPetHandler];