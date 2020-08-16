import { Person } from "../personselect";

export default interface HeaderProps {
    user : Person | undefined;
    setUser : (p : Person) => void;
}