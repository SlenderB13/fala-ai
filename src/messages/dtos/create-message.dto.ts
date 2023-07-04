import { User } from "src/users/user.interface";

export class CreateMessageDTO {
    public content: string;
    public sentAt: Date;
    public user?: User;
}