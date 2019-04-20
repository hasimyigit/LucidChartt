import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from 'src/app/_Service/users.service';
import { Todos } from 'src/app/_Model/todos';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodosEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService
  ) { }

  ngOnInit() {
  }
  editTodo(todo: Todos) {
    this.userService.editTodosById(todo);
    this.close();
    window.alert('Edit Todo');
  }
  close() {
    this.dialogRef.close();
  }

}
