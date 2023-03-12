import { USER_ROLE } from "../utils";

export interface UserType {
    email: string,
    id: string,
    role: USER_ROLE,
    name: string
}