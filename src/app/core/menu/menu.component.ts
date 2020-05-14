import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("Movie","/movie/list","List of Movies"),
      new MenuItem("Actor","actor/list","List of Actors"),
      new MenuItem("Credit","credit/list","List of Credits"),
      new MenuItem("Log In", "/user/login","Log in")
    ];
  }

}
