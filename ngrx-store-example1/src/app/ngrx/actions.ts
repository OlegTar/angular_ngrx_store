import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type payload1 = 'counter1' | 'counter2';

export class IncrementAction implements Action {
    type = INCREMENT;

    constructor(public payload: payload1) {
    }
}

export class DecrementAction implements Action {
    type = DECREMENT;

    constructor(public payload: payload1) {
    }
}

export type MyAction = IncrementAction 
    | DecrementAction;
