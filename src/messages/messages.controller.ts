import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateMessageDTO } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";
import { Message } from "./message.interface";
import { randomUUID } from "node:crypto"

@Controller()
export class MessagesController {
    constructor(private messagesService: MessagesService) {

    }

    @Get("/messages")
    public async findAll(): Promise<Message[]> {
        return this.messagesService.findAll();    
    }

    @Post("/messages")
    public async create(@Body() createMessageDTO: CreateMessageDTO): Promise<CreateMessageDTO> {
        return this.messagesService.create(createMessageDTO);
    }
}