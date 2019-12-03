import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Retrieving taks';
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
