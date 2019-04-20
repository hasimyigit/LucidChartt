import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { NavComponent } from './Header/nav/nav.component';
import { UserDetailComponent } from './Main/user-detail/user-detail.component';
import { AlbumComponent } from './Main/album/album.component';
import { PostsComponent } from './Main/posts/posts.component';
import { PostDetailComponent } from './Main/post-detail/post-detail.component';
import { TodosComponent } from './Main/todos/todos.component';
import { TodosDeleteComponent } from './Main/todos-delete/todos-delete.component';
import { TodosEditComponent } from './Main/todos-edit/todos-edit.component';
import { TodosConfirmComponent } from './Main/todos-confirm/todos-confirm.component';
import { TodoCreateComponent } from './Main/todo-create/todo-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDetailComponent,
    AlbumComponent,
    PostsComponent,
    PostDetailComponent,
    TodosComponent,
    TodosDeleteComponent,
    TodosEditComponent,
    TodosConfirmComponent,
    TodoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ],
  entryComponents: [
    PostDetailComponent,
    TodosEditComponent,
    TodosDeleteComponent,
    TodosConfirmComponent,
    TodoCreateComponent
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
