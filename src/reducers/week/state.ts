import Week from "./week";
import FetchStatus from "../../api/fetchstatus";

export interface WeekState {
    weeks : Week[];
    status : FetchStatus;
}