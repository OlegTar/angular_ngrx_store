import { createSelector } from "@ngrx/store";

export interface State {
    counter: number;
    counter2: number;
}

export const initialState: State = {
    counter: 0,
    counter2: 0
}

export const getCounter1 = createSelector(
    (s: {main: State}) => s.main,
    (s: State) => s.counter,
)

export const getCounter2 = createSelector(
    (s: {main: State}) => s.main,
    (s: State) => s.counter2,
)