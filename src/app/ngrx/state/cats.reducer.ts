import { HttpErrorResponse } from '@angular/common/http';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Message } from 'primeng/api';
import { Cat } from '../../types';
import { GetCatActions, PetCatActions } from './cats.action';

interface State {
  cats: Cat[];
  loading: boolean;
  isBeingPetted: boolean;
  catToastMessage: Message | null;
  error: HttpErrorResponse | null;
}

const initialState: State = {
  cats: [],
  loading: false,
  isBeingPetted: false,
  catToastMessage: null,
  error: null,
};

export const catFeature = createFeature({
  name: 'cats',
  reducer: createReducer(
    initialState,
    // Get Cats
    on(GetCatActions.getCats, (state) => ({
      ...state,
      loading: true,
    })),
    on(GetCatActions.getCatsSuccess, (state, action) => ({
      ...state,
      cats: action.res,
      loading: false,
    })),
    on(GetCatActions.getCatsFailure, (state, action) => ({
      ...state,
      loading: false,
      error: action.res,
    })),
    // Pet Cats
    on(PetCatActions.petCats, (state) => ({
      ...state,
      isBeingPetted: true,
      catToastMessage: {
        severity: 'info',
        summary: 'Info',
        detail: 'Cats require 2 seconds of petting',
        life: 1500,
      },
    })),
    on(PetCatActions.petCatsSuccess, (state, action) => {
      const catIndex = state.cats.findIndex(
        (row) => row.name === action.res.name
      );

      const newCatList = [...state.cats];
      newCatList[catIndex] = action.res;

      return {
        ...state,
        cats: newCatList,
        isBeingPetted: false,
        catToastMessage: {
          severity: 'success',
          summary: 'Success',
          detail: 'Thank you for petting me human!',
          life: 1500,
        },
      };
    }),
    on(PetCatActions.petCatsFailure, (state, action) => ({
      ...state,
      isBeingPetted: false,
      error: action.res,
      catToastMessage: {
        severity: 'error',
        summary: 'Error',
        detail: action.res.statusText,
        life: 1500,
      },
    }))
  ),
});

export const {
  name,
  reducer,
  // auto generated selectors
  selectCatsState,
  selectCats,
  selectIsBeingPetted,
  selectCatToastMessage,
  selectError,
  selectLoading,
} = catFeature;
