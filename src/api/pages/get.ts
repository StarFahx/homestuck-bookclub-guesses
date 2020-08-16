import api from '../api';
import { Dispatch } from 'redux';
import { GET_PAGES_START, GET_PAGES_ERROR, GET_PAGES_SUCCESS } from '../../reducers/pages/actions';
import Page from '../../reducers/pages/page';

function start(weekId : number) {
    return {
        type : GET_PAGES_START,
        weekId : weekId
    }
};

function fail(weekId : number) {
    return {
        type : GET_PAGES_ERROR,
        weekId : weekId
    }
};

function success(weekId : number, pages : Page[]) {
    return {
        type : GET_PAGES_SUCCESS,
        weekId : weekId,
        data : pages
    }
};

export default function GetPages(weekId : number) {
    return function(dispatch : Dispatch) {
        dispatch(start(weekId))
        return api.get(`/week/${weekId}/page`)
            .then(response => dispatch(success(weekId, response.data as Page[])))
            .catch(err => dispatch(fail(weekId)));
    }
}