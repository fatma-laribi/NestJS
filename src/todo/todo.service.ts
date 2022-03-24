/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './enums/todo-status.enum';
import { TodoDto } from './TodoDto.dto';
import { UpdateTodoDto } from './UpdateTodoDto.dto';
@Injectable()
export class TodoService {
  todos: Todo[] = [];
  setTodos(inputTodos: Todo[]): Todo[] {
    this.todos = inputTodos;
    return this.todos;
  }
  getAll(): Todo[] {
    return this.todos;
  }

  getbyID(id: string): Todo {
    const todo=this.todos.find((todo) => todo.id === id);
    if(!todo){
      throw new NotFoundException("Todo introuvable"); 
    }
    return todo ;}
    
  deleteByID(id: string): Todo[] {
    //use indexOf and splice
    this.todos=this.todos.filter((todo) => todo.id != id);
    return this.todos;
  }
  modify(newTodo: UpdateTodoDto, id: string): Todo[] {
    const todo = this.getbyID(id);
    todo.name=newTodo.name ?? todo.name;//if name exists affectiha sinon eli baad
    todo.description=newTodo.description;
    return this.todos;
  }
  addTodo(newTodoData: TodoDto): Todo[] {
    let todo = new Todo();
    todo.id = uuidv4();
    todo.createdAt=new Date();
    todo.status=TodoStatusEnum.waiting;
    //todo.name... pour optimiser
    todo = { ...todo, ...newTodoData };
    this.todos.push(todo);
    return this.todos;
  }
}
