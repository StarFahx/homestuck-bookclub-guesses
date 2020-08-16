import FetchStatus from "../../api/fetchstatus";
import Page from "./page";

export interface WeekPageStatus {
    pages : Page[];
    status : FetchStatus;
}

export default interface PagesState {
    [weekId : number] : WeekPageStatus;
}