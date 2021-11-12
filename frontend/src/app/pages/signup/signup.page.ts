import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from 'src/environments/environment';
import { NgControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signUpForm: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  async next() {
    userData.username = this.signUpForm.controls.username.value;
    console.log(userData);
    this.router.navigate(['signup/email']);
  }

}
