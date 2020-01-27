// users view component
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import {User} from 'src/app/Model/user';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  /**
   * users array and childComponent (DataGridDevxtremeComponent)
   */
  users: User[];
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  /**
   * get users
   */
  fetchUsers() {
    this.usersService.getUsers().subscribe((result: User[]) => {
      this.users = result;
    });
  }

}
