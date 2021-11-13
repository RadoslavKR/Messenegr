import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { userData } from 'src/environments/environment';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  private signUpForm: any;
  public check1 = false;
  public check2 = false;
  public check3 = false;

  constructor(private roueter: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      password: new FormControl('', [Validators.required, (controls) => this.validator(controls)]),
    });
  }

  checkPassword() {
    const password: string = this.signUpForm.controls.password.value;
    if (password.length >= 8) this.check1 = true;
    else this.check1 = false;
    let change1 = false, change2 = false;
    for (let i=0; i<password.length; i++) {
      if (('a' <= password[i] && password[i] <= 'z') || ('A' <= password[i] && password[i] <= 'z')){
        this.check2 = true;
        change1 = true;
        if (change2) break;
      }
      if ('0' <= password[i] && password[i] <= '9') {
        this.check3 = true;
        change2 = true;
        if (change1) break;
      }
    }
    if (!change1) this.check2 = false;
    if (!change2) this.check3 = false;
  }

  validator(controls: AbstractControl) {
    const password = controls.value;
    let check1 = false, check2 = false, check3 = false;
    if (password.length >= 8) check1 = true;
    for (let i=0; i<password.length; i++) {
      if (('a' <= password[i] && password[i] <= 'z') || ('A' <= password[i] && password[i] <= 'z')){
        check2 = true;
        if (check3) break;
      }
      if ('0' <= password[i] && password[i] <= '9') {
        check3 = true;
        if (check2) break;
      }
    }
    if (!check1 || !check2 || !check3) return { 'no': true }
    return null;
  }

  next() {
    userData.password = this.signUpForm.controls.password.value;
    console.log(userData);
    this.roueter.navigate(['/signup/avatar']);
  }

}
