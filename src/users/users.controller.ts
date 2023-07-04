import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./user.interface";
import { randomUUID } from "node:crypto"

@Controller()
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Get("/users")
    public async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post("/users")
    public async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.create(createUserDTO)
    }
}