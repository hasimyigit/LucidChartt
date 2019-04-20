import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from 'src/app/_Service/users.service';

@Component({
  selector: 'app-todos-delete',
  templateUrl: './todos-delete.component.html',
  styleUrls: ['./todos-delete.component.css']
})
export class TodosDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodosDeleteComponent>,
              private userService: UsersService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  DeleteTodo() {
this.userService.deleteTodosById(this.data.todo.id);
this.close();
window.alert('Delete Todo');
  }

}
