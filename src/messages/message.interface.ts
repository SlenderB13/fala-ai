import { User } from "src/users/user.interface";

export interface Message {
    id?: string;
    sentAt: Date;
    content: string;
    user?: User;
}