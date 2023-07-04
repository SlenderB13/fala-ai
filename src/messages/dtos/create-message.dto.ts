import { User } from "src/users/user.interface";

export class CreateMessageDTO {
    public content: string;
    public user?: User;
}