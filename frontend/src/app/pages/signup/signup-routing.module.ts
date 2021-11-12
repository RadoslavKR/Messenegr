import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
