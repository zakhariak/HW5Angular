import { IntTask } from '../interfaces/task.interface';

export class Task implements IntTask {
    constructor(
        public name: string,
        public status: boolean) { }
}