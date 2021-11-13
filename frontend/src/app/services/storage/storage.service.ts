import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
   }

  async init() {
    await this.storage.create();
  }

  set(name: string, value: any) {
    this.storage.set(name, value);
  }

  async get(name: string) {
    let value: any;
    await this.storage.get(name).then(data => {
      value = data;
    });
    return value;
  }
}
