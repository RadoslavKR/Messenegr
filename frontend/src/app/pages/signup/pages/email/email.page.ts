import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  private signUpForm: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  next() {
    userData.email = this.signUpForm.controls.email.value;
    console.log(userData);
    this.router.navigate(['/signup/phone']);
  }

}
