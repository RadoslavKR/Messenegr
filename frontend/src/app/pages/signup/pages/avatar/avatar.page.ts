import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImagePicker } from '@ionic-native/image-picker';

import { userData } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor(private router: Router, private storageService: StorageService, private userService: UserService) { }

  ngOnInit() {
  }

  changeAvatar() {
    ImagePicker.getPictures({maximumImagesCount: 1}).then(image => {
      console.log(image);
      userData.image = image;
    }, error => {
      console.log(error);
    });
  }

  async next() {
    await this.storageService.set('user', userData);
    this.userService.addUser(userData).subscribe();
    this.router.navigate(['']);
  }

}
