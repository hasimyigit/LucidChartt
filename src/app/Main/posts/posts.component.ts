import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Posts } from 'src/app/_Model/posts';
import { UsersService } from 'src/app/_Service/users.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { MatDialog} from '@angular/material';
import { Comments } from 'src/app/_Model/comments';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postsInput: number;
  constructor(
    private userService: UsersService,
    public dialog: MatDialog
  ) { }
  selectedPost: Posts;
  getPosts: Posts[];
  selectedComs: Comments[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'title' ];
  listData: MatTableDataSource<any>;
  ngOnInit() {
    console.log(this.postsInput);
  }
  getPostById(id: number) {
    this.userService.getPostById(id).subscribe(data => {
      this.selectedPost = data;
      console.log(this.selectedPost);
      this.getComments(id);
      console.log(this.selectedComs);
      this.openDialog();
      });
      }
      getPostByUserId(id: number) {
         this.userService.getPostByUserId(id).subscribe(data => {
          this.getPosts = data;
          console.log(this.getPosts);
          this.listData = new MatTableDataSource(this.getPosts);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          });
          }
          getComments(id: number) {
            this.userService.getCommentsByPostId(id).subscribe(data => {
              this.selectedComs = data;
          });
        }


          openDialog(): void {
            const dialogRef = this.dialog.open(PostDetailComponent, {
              data: {selectedPost: this.selectedPost, selectedComs: this.selectedComs}
            });
            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
          }
        }

