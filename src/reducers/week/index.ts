import { WeekState } from "./state";
import WeekAction from "./actions";
import { RootState } from "..";

const defaultState : WeekState = {
    weeks : [],
    status : 'unloaded',
}

export const selectWeeks = (state : RootState) => state.week;

export default function WeekReducer(state : WeekState = defaultState, action : WeekAction) : WeekState {
    switch (action.type) {
        case 'GET_WEEKS_START':
            return {
                weeks : [],
                status : 'loading'
            };
        case 'GET_WEEKS_SUCCESS':
            return {
                weeks: action.data,
                status: 'loaded'
            };
        case 'GET_WEEKS_ERROR':
            return {
                weeks : [],
                status: 'errored'
            }
        default:
            return state;
    }
}