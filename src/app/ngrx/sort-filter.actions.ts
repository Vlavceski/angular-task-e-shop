import { createAction, props } from '@ngrx/store';

export const setSortOption = createAction(
  '[Sort Filter] Set Sort Option',
  props<{ sortOption: string }>()
);

export const setFilterText = createAction(
  '[Sort Filter] Set Filter Text',
  props<{ filterText: string }>()
);