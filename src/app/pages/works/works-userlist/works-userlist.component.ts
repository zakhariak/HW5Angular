import { Component, OnInit } from '@angular/core';
import { IntUser } from '../../../shared/interfaces/user.interface';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-works-userlist',
  templateUrl: './works-userlist.component.html',
  styleUrls: ['./works-userlist.component.scss']
})
export class WorksUserlistComponent implements OnInit {
  users: Array<IntUser> = [];
  id: number;
  index: number;
  login: string;
  password: number;
  email: string;
  btnSaveEdit: boolean = false;
  btnDeleteDis: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    const user: IntUser = new User(1, this.login, this.password, this.email);
    if (this.users.length > 0) {
      user.id = this.users.slice(-1)[0].id + 1;
    }
    this.users.push(user);
    this.login = '';
    this.password = null;
    this.email = '';
  }

  editUser(index: number, obj: IntUser): void {
    this.index = index;
    this.id = obj.id;
    this.login = obj.login;
    this.password = obj.password;
    this.email = obj.email;
    this.btnSaveEdit = true;
    this.btnDeleteDis = true;
    console.log(this.users);
  }

  saveEditUser(): void {
    const editUser: IntUser = new User(this.id, this.login, this.password, this.email);
    this.users.splice(this.index, 1, editUser);
    this.login = '';
    this.password = null;
    this.email = '';
    this.btnSaveEdit = false;
    this.btnDeleteDis = false;
    console.log(this.users);

  }

  deleteUser(index: number): void {
    this.users.splice((index), 1);
  }

}
