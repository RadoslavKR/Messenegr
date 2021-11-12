import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from 'src/environments/environment';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signUpForm: any;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  next() {
    console.log(this.signUpForm.controls.username.value);
  }

}
