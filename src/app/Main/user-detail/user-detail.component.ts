import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/_Model/user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userInput: User;
  constructor(

  ) { }

  ngOnInit() {
  }


}
