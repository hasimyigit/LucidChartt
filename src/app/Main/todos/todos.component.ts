import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/_Service/users.service';
import { Todos } from 'src/app/_Model/todos';
import { TodosDeleteComponent } from '../todos-delete/todos-delete.component';
import {MatDialog} from '@angular/material';
import { TodosEditComponent } from '../todos-edit/todos-edit.component';
import { TodosConfirmComponent } from '../todos-confirm/todos-confirm.component';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todosInput: number;
  constructor(
    private userService: UsersService,
    public dialog: MatDialog
  ) { }
  getTodos: Todos[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['completed', 'title', 'id' ];
  listData: MatTableDataSource<any>;
selectedTodo: Todos;
createTodo: Todos;
deleteTodo: Todos;
  ngOnInit() {

  }
  getTodosByUserId(id: number) {
    this.userService.getTodosByUserId(id).subscribe(data => {
     this.getTodos = data;
     console.log(this.getTodos);
     this.listData = new MatTableDataSource(this.getTodos);
     this.listData.sort = this.sort;
     this.listData.paginator = this.paginator;
     });
     }

     editTodo(id: number) {
  this.userService.getTodosById(id).subscribe(data => {
    this.selectedTodo = data;
    this.openDialog();
});
}
openDialog(): void {
  const dialogRef = this.dialog.open(TodosEditComponent, {
    data: {todo: this.selectedTodo}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
openDialog2(): void {
  const dialogRef = this.dialog.open(TodosDeleteComponent, {
    data: {todo: this.selectedTodo}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.deleteTodo = result;
    this.getTodos.filter(result.id);
    this.listData = new MatTableDataSource(this.getTodos);
  });
}
openDialog3(): void {
  const dialogRef = this.dialog.open(TodosConfirmComponent, {
    data: {todo: this.selectedTodo}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

openDialog4(): void {
  const dialogRef = this.dialog.open(TodoCreateComponent, {
    data: {todo: this.selectedTodo}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.createTodo = result;
    this.getTodos.push(this.createTodo);
    this.listData = new MatTableDataSource(this.getTodos);
  });
}

selecedFakeTodo(id: number) {
  this.userService.getTodosById(id).subscribe(data => {
    this.selectedTodo = data;
    this.openDialog4();
});
}

}
