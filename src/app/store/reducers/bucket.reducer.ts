import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
import { addToBucket, removeFromBucket } from '../actions/bucket.action';

const initialState: Bucket[] = []

// This updates the state by adding the new item to the bucket array
export const bucketReducer = createReducer(initialState,
    on(addToBucket, (state, action) => {
        const existingItem = state.find(item => item.id === action.payload.id)
        {
            if (existingItem) {
                return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item);
            }
            else {
                return [...state, action.payload];
            }

        }

    }),
    on(removeFromBucket, (state, action) => {
        const existingItem = state.find(item => item.id === action.payload.id)
        {
            if (existingItem && existingItem.quantity > 1) {
                return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item);
            }
            else {
                return state.filter(item => item.id !== action.payload.id);
            }
        }
    })
)