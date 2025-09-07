import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

// Action to add an item to the bucket, this only sends the action but state will be modified in the reducer
export const addToBucket = createAction(
    '[Bucket] Add',
    props<{payload:Bucket}>()
);

export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{payload:Partial<Bucket>}>()
);