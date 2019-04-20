import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_Model/user';
import { Observable } from 'rxjs';
import { Album } from '../_Model/album';
import { Posts } from '../_Model/posts';
import { Todos } from '../_Model/todos';
import { Comments } from '../_Model/comments';
import { Photo } from '../_Model/photo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: User[];
constructor(
  private http: HttpClient
) { }
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
}
getUserById(id: number): Observable<User> {
  return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
}
getAlbumByUserId(id: number): Observable<Album[]> {
  return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums?userId=' + id);
}
getPhotoByAlbumId(id: number): Observable<Photo[]> {
  return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + id);
}
getPostByUserId(id: number): Observable<Posts[]> {
  return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id);
}
getPostById(id: number): Observable<Posts> {
  return this.http.get<Posts>('https://jsonplaceholder.typicode.com/posts/' + id);
}
getTodosByUserId(id: number): Observable<Todos[]> {
  return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos?userId=' + id);
}
getTodosById(id: number): Observable<Todos> {
  return this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos/' + id);
}
deleteTodosById(id: number) {
  this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
  console.log(id + ' silindi ');
}
editTodosById(todo) {
  this.http.put('https://jsonplaceholder.typicode.com/todos/', todo ).subscribe();

}
getCommentsByPostId(id: number): Observable<Comments[]> {
  return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id);
}

}
