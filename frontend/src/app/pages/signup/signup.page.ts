import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { Router } from '@angular/router';

import { userData } from 'src/environments/environment';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signUpForm: any;
  private users: any;
  private check = true;

  constructor(private router: Router, private userService: UserService) { }

  async ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
    this.users = await this.userService.getUsers();
  }

  async next() {
    this.check = true;
    this.users.forEach(element => {
      if (this.signUpForm.controls.username.value == element.Username) {
        this.check = false;
      }
    });
    if (this.check) {
      userData.username = this.signUpForm.controls.username.value;
      console.log(userData);
      this.router.navigate(['signup/email']);
    }
  }

}
