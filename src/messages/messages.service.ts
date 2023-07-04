import { Injectable } from "@nestjs/common";
import { Message } from "./message.interface";
import { randomUUID } from "node:crypto";
import { CreateMessageDTO } from "./dtos/create-message.dto";

@Injectable()
export class MessagesService {
    public messages: Message[];

    public findAll(): Message[] {
        return this.messages;
    }

    public create(message: CreateMessageDTO): Message {
        const { content, user } = message;

       const newMessage: Message = {
        id: randomUUID(),
        content,
        sentAt: new Date(),
        user
       }

       this.messages.push(newMessage);
       
        return newMessage;
    }
}