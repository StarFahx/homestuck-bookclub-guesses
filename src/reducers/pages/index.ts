import PagesState from "./state";
import PagesAction, { GET_PAGES_START, GET_PAGES_SUCCESS, GET_PAGES_ERROR, ADD_PAGE_SUCCESS, ADD_PAGE_ERROR } from "./actions";
import { RootState } from "..";

const defaultState : PagesState = {};

export const selectPages = (state : RootState) => state.pages;

export default function PagesReducer(state : PagesState = defaultState, action : PagesAction) : PagesState {
    switch (action.type) {
        case GET_PAGES_START:
            state[action.weekId] = { status: 'loading', pages: [] };
            return {...state};
        case GET_PAGES_ERROR:
            state[action.weekId] = { status: 'errored', pages: [] };
            return {...state};
        case GET_PAGES_SUCCESS:
            state[action.weekId] = { status: 'loaded', pages: action.data };
            return {...state};
        case ADD_PAGE_SUCCESS:
            state[action.weekId] = { status: 'unloaded', pages: [] };
            return {...state};
        case ADD_PAGE_ERROR:
            state[action.weekId] = { status: 'unloaded', pages: [] };
            return {...state};
        default:
            return state;
    }
}