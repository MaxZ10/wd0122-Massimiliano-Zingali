import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css']
})
export class UsersPage implements OnInit {

  userlist: Todo[] = [
    {id:1, title:'first', completed:false},
    {id:2, title:'second', completed:false},
    {id:3, title:'third', completed:false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
