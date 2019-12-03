import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { Task } from './dto/interfaces/Task';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/dto/create-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Task {
    return this.tasksService.getTask(Number(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return `Deleting task ${id}`;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return `Updating task ${id}`;
  }

}
