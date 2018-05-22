import * as actions from './actions';
import { initialState, State } from './state';
import { MyAction } from './actions';

export function reducer(state: State = initialState, action: MyAction) {
    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            };
        case actions.DECREMENT:
            return {
                ...state,
                [action.payload]: state[action.payload] - 1
            };
        default:
            return state;
    }
}