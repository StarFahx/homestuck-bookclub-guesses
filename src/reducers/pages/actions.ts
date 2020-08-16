import Page from "./page";

export const GET_PAGES_START = 'get_pages_start';
export const GET_PAGES_SUCCESS = 'get_pages_success';
export const GET_PAGES_ERROR = 'get_pages_error';

export const ADD_PAGE_START = 'add_page_start';
export const ADD_PAGE_SUCCESS = 'add_page_success';
export const ADD_PAGE_ERROR = 'add_page_error';

export interface GetPagesStartAction {
    type : typeof GET_PAGES_START;
    weekId : number;
}

export interface GetPagesSuccessAction {
    type : typeof GET_PAGES_SUCCESS;
    weekId : number;
    data : Page[];
}

export interface GetPagesErrorAction {
    type : typeof GET_PAGES_ERROR;
    weekId : number;
}

export interface AddPageStartAction {
    type : typeof ADD_PAGE_START;
    weekId : number;
}

export interface AddPageSuccessAction {
    type : typeof ADD_PAGE_SUCCESS;
    weekId : number;
}

export interface AddPageErrorAction {
    type : typeof ADD_PAGE_ERROR;
    weekId : number;
}


type GetPagesAction = GetPagesStartAction | GetPagesSuccessAction | GetPagesErrorAction;
type AddPageAction = AddPageStartAction | AddPageSuccessAction | AddPageErrorAction;
type PagesAction = GetPagesAction | AddPageAction;

export default PagesAction;