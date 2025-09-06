import { createReducer } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"


const initialState : Grocery[] = [
    {"id":1,"name":"Apples","type":"fruit"},
    {"id":2,"name":"Banana","type":"fruit"},
    {"id":3,"name":"Lux","type":"soap"},
    {"id":4,"name":"Colgate","type":"toothpaste"}
]

// Create reducer and provide the initial state 
export const groceryReducer = createReducer(
    initialState
)