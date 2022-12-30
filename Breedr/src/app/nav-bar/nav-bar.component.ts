import { Component, OnInit } from '@angular/core';
import { RouteNames } from '../Route-Names.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  HomeRoute: string = RouteNames.HOME;
  constructor() { }

  ngOnInit(): void {
  }

}
