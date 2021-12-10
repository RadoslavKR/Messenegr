import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {
  public loginForm: any;
  private users: any;

  constructor(private router: Router, private userServie: UserService) { }

  async ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.users = await this.userServie.getUsers();
  }

  login() {
    this.users.forEach(element => {
      if (this.loginForm.controls.email.value == element.Email || this.loginForm.controls.email.value == element.Phone) {
        if (this.loginForm.controls.password.value == element.Password) {
          
        }
      }
    })
  }

  signUp() {
    this.router.navigate(["/signup"]);
  }

}
