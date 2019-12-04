import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getTask(@Param('id') id): Promise<Task> {
    return this.tasksService.findOneById(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<any> {
    return this.tasksService.delete(id);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): Promise<Task> {
    return this.tasksService.update(task);
  }

}
