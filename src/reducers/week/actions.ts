import Week from "./week";

export interface WeekStartAction {
    type : 'GET_WEEKS_START';
}

export interface WeekSuccessAction {
    type : 'GET_WEEKS_SUCCESS';
    data : Week[];
}

export interface WeekErrorAction {
    type : 'GET_WEEKS_ERROR';
}

type WeekAction = WeekStartAction | WeekSuccessAction | WeekErrorAction;

export default WeekAction;