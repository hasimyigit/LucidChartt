import { Component, OnInit, Input, Inject } from '@angular/core';
import { Posts } from 'src/app/_Model/posts';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})

export class PostDetailComponent implements OnInit {
  @Input() postdetailInput: Posts;
  constructor(
    public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  close() {
    this.dialogRef.close();
  }

}
