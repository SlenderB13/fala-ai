import { Injectable } from "@nestjs/common";
import { Message } from "./message.interface";

@Injectable()
export class MessagesService {
    public messages: Message[];

    public findAll(): Message[] {
        return this.messages;
    }

    public create(message: Message): Message {
        const { id, content, sentAt, user } = message;

        return message;
    }
}