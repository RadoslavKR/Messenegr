import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { userData } from 'src/environments/environment';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  private signUpForm: any;

  constructor(private roueter: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }

  next() {
    userData.phone = this.signUpForm.controls.phone.value;
    console.log(userData);
    this.roueter.navigate(['signup/password']);
  }

}
