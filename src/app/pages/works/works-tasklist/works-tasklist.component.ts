import { Component, OnInit } from '@angular/core';
import { IntTask } from '../../../shared/interfaces/task.interface';
import { Task } from '../../../shared/models/task.model';

@Component({
  selector: 'app-works-tasklist',
  templateUrl: './works-tasklist.component.html',
  styleUrls: ['./works-tasklist.component.scss']
})

export class WorksTasklistComponent implements OnInit {
  tasks: Array<IntTask> = [
    {
      name: 'HTML',
      status: true
    },
    {
      name: 'Java Script',
      status: false
    },
    {
      name: 'Angular',
      status: false
    }
  ];
  name: string;
  status: boolean = false;
  textEdit: string;
  showEdit: boolean = false;
  saveI: number;
  alert: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.name) {
      const task: IntTask = new Task(this.name, this.status);
      console.log(this.tasks);
      this.tasks.push(task);
      this.name = '';
      this.alert = false;
    } else {
      this.alert = true;
    }
  }

  change(obj: IntTask): void {
    obj.status = !obj.status
  }

  editTask(index: number, obj: IntTask): void {
    this.showEdit = true;
    this.textEdit = obj.name;
    this.saveI = index;
  }

  saveEditTask(): void {
    const task: IntTask = new Task(this.textEdit, this.status)
    this.tasks.splice(this.saveI, 1, task);
    this.textEdit = '';
    this.showEdit = false;
  }

  deleteTask(index: number): void {
    this.tasks.splice((index), 1);
  }

}
