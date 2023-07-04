import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { randomUUID } from "crypto";

@Injectable()
export class UsersService {
    public users: User[];

    public findAll(): User[] {
        return this.users;
    }

    public create(user: CreateUserDTO): User {
        const { name, email } = user;

        const newUser: User = {
            id: randomUUID(),
            name,
            email
        }

        this.users.push(newUser);

        return newUser;
    }

    public delete(user: User): void {
        this.users.findIndex((userToDelete) => {
            return userToDelete.id !== user;
        })
    }
}