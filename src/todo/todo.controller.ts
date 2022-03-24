/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { TodoService } from './todo.service';
@Controller("/todo")
export class TodoController {
  constructor(private todoService: TodoService){}
  @Get("/todo")
  getTodos(): Todo[] {
    return this.todoService.getAll();
  }
  @Post("/todo")
  addTodo(@Body() newTodoData: Todo): Todo[] {
     return this.todoService.addTodo(newTodoData);
  }
  @Get("todo/:id")
  getTodo(@Param("id") id): Todo {
    return this.todoService.getbyID(id);
  }
  @Delete("todo/:id")
  deleteTodo(@Param("id") id): Todo[] {
    return this.todoService.deleteByID(id);
  }
  @Patch("todo/:id")
  modifyTodo(@Req() req: Request, @Param("id") id):Todo[]{
    return this.todoService.modify(req.body,id);
  }
}
