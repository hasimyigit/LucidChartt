import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from 'src/app/_Service/users.service';

@Component({
  selector: 'app-todos-confirm',
  templateUrl: './todos-confirm.component.html',
  styleUrls: ['./todos-confirm.component.css']
})
export class TodosConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodosConfirmComponent>,
              private userService: UsersService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }


}
