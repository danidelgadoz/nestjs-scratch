import { Module } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
    imports: [TasksModule],
    controllers: [TasksController],
    providers: [TasksService],
  })
export class TasksModule {}
