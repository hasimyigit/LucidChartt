import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/_Model/album';
import { UsersService } from 'src/app/_Service/users.service';
import { Photo } from 'src/app/_Model/photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() albumInput: Album[];
  selectedAlbum: Album;
  Photos: Photo[];
selectedValue: string;
  constructor(
private userService: UsersService
  ) { }

  ngOnInit() {

  }
  getPhotoByAlbumId(id: number) {
    this.userService.getPhotoByAlbumId(id).subscribe(data => {
     this.Photos = data;
   });
  }
}
