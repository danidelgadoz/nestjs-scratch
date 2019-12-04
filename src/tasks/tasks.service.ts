import { Injectable } from '@nestjs/common';

import { Task } from './dto/interfaces/Task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/dto/create-task.dto';

@Injectable()
export class TasksService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async findOneById(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async update(createTaskDto: CreateTaskDto): Promise<any> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.updateOne(createTaskDto);
  }

  async delete(id: string): Promise<any> {
    return await this.taskModel.deleteOne({ _id: id });
  }
}
