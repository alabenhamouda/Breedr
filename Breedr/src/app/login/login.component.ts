import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   rightPanelActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleLeftPannel() {
     this.rightPanelActive = true;
  }

  toggleRightPannel() {
    this.rightPanelActive = false;
  }
}
