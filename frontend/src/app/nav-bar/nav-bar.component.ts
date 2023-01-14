import { Component, OnInit } from '@angular/core';
import { RouteNames } from '../Route-Names.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  HomeRoute: string = RouteNames.HOME;
  loginRoute: string = RouteNames.LOGIN;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate([this.loginRoute]);
  }
}
