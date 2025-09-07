import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

// feature selector - selects all grocery items from the state
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

// selector to filter grocery items by type (e.g., 'fruit')
export const selectGroceryByType = (type:string) => createSelector(
  selectGroceries,
(state) => {
    return state.filter(item => item.type === type);
});