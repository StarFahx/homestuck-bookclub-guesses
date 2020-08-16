import api from '../api';
import { Dispatch } from 'redux';
import { ADD_PAGE_START, ADD_PAGE_SUCCESS, ADD_PAGE_ERROR } from '../../reducers/pages/actions';
import Page from '../../reducers/pages/page';

function start(weekId : number) {
    return {
        type : ADD_PAGE_START,
        weekId : weekId
    }
};

function fail(weekId : number) {
    return {
        type : ADD_PAGE_ERROR,
        weekId : weekId
    }
};

function success(weekId : number) {
    return {
        type : ADD_PAGE_SUCCESS,
        weekId : weekId
    }
};

export default function AddPage(weekId : number, page : Page) {
    return function(dispatch : Dispatch) {
        dispatch(start(weekId))
        return api.put(`/week/${weekId}/page`, page)
            .then(response => dispatch(success(weekId)))
            .catch(err => dispatch(fail(weekId)));
    }
}