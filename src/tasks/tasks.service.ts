import { Injectable } from '@nestjs/common';

import { Task } from './dto/interfaces/Task';

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: 'Task 1',
            description: 'description 1',
            done: true,
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'description 2',
            done: false,
        },
        {
            id: 3,
            title: 'Task 3',
            description: 'description 3',
            done: false,
        },
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        return this.tasks.find(t => t.id === id);
    }
}
