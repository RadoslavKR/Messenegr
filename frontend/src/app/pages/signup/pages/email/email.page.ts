import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { userData } from 'src/environments/environment';
import { UserService } from 'src/app/services/user/user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  private signUpForm: any;
  private users: any;
  private check = true;

  constructor(private router: Router, private userService: UserService) { }

  async ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)])
    });
    this.users = await this.userService.getUsers();
  }

  next() {
    this.check = true;
    this.users.forEach(element => {
      if (this.signUpForm.controls.email.value == element.Email) {
        this.check = false;
      }
      console.log(this.signUpForm.controls.email.value + " " + element.Email);
    });
    console.log(this.check);
    if (this.check) {
      userData.email = this.signUpForm.controls.email.value;
      console.log(userData);
      this.router.navigate(['/signup/phone']);
    }

  }

}
