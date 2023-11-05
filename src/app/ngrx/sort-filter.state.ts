import { createReducer, on } from '@ngrx/store';
import { setSortOption, setFilterText } from './sort-filter.actions';

export interface SortFilterState {
  sortOption: string;
  filterText: string;
}

const initialState: SortFilterState = {
  sortOption: 'Name (A-Z)',
  filterText: '',
};

export const sortFilterReducer = createReducer(
  initialState,
  on(setSortOption, (state, { sortOption }) => ({ ...state, sortOption })),
  on(setFilterText, (state, { filterText }) => ({ ...state, filterText }))
);