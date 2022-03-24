/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { TodoStatusEnum } from './enums/todo-status.enum';
import { TodoDto } from './TodoDto.dto';

export class UpdateTodoDto extends PartialType(TodoDto) {
    public status: TodoStatusEnum;
}
