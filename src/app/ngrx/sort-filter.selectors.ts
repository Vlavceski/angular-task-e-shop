import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SortFilterState } from './sort-filter.state';

export const selectSortFilterState = createFeatureSelector<SortFilterState>('sortFilter');

export const selectSortOption = createSelector(
  selectSortFilterState,
  (state) => state.sortOption
);

export const selectFilterText = createSelector(
  selectSortFilterState,
  (state) => state.filterText
);