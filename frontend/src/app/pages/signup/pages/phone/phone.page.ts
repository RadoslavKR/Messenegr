import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { userData } from 'src/environments/environment';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  private signUpForm: any;
  private users: any;
  private check = true;

  constructor(private roueter: Router, private userService: UserService) { }

  async ngOnInit() {
    this.signUpForm = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.minLength(7), (controls) => this.validator(controls)])
    });
    this.users = await this.userService.getUsers();
  }

  validator(controls: AbstractControl) {
    const phone: string = controls.value;
    let g = 0;
    for (let i=0; i<phone.length; i++) {
      if ('0' <= phone[i] && phone[i] <= '9') g++;
    }
    if (g != phone.length) return { "contains char": true }
    return null;
  }

  next() {
    this.check = true;
    this.users.forEach(element => {
      if (this.signUpForm.controls.phone.value == element.Phone) {
        this.check = false;
      }
    });
    if (this.check) {
      userData.phone = this.signUpForm.controls.phone.value;
      console.log(userData);
      this.roueter.navigate(['signup/password']);
    }
  }

}
