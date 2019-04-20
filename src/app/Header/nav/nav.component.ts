import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_Service/users.service';
import { User } from 'src/app/_Model/user';
import { Album } from 'src/app/_Model/album';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  users: User[];
  selectedValue: number;
  selectUser: User;
  selectedAlbum: Album[];
  selectedPostUserId: number;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    // tslint:disable-next-line: no-debugger
      debugger;
    // subscribe başarılı olduysa demek
      this.userService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      }, err => {
        console.log('err of Get-Users');
        console.log(err);
      });
    }
    getUserById(id: number) {
      this.userService.getUserById(id).subscribe(data => {
       this.selectUser = data;
       this.selectedPostUserId =  this.selectedValue;
       console.log(this.selectedPostUserId);
       this.userService.getAlbumByUserId(id).subscribe(data2 => {
        this.selectedAlbum = data2;
    });
     });
    }
  }
