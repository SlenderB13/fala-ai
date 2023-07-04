import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";

@Injectable()
export class UsersService {
    public users: User[];

    public findAll(): User[] {
        return this.users;
    }

    public create(user: User): User {
        const { id, name, email } = user;

        return user;
    }

    public delete(user: User): void {
        this.users.findIndex((userToDelete) => {
            return userToDelete.id !== user;
        })
    }
}