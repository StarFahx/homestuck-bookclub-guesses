import api from '../api';
import { Dispatch } from 'redux';
import Week from '../../reducers/week/week';

const start = {
    type : 'GET_WEEKS_START'
};

const fail = {
    type : 'GET_WEEKS_ERROR'
};

function success(weeks : Week[]) {
    return {
        type : 'GET_WEEKS_SUCCESS',
        data : weeks
    }
};

export default function GetWeeks() {
    return function(dispatch : Dispatch) {
        dispatch(start)
        return api.get('/week')
            .then(response => dispatch(success(response.data as Week[])))
            .catch(err => dispatch(fail));
    }
}