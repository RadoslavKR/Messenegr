import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router, private storage: StorageService) { }

  async ngOnInit() {
    if (await this.storage.get('user') == null) {
      this.router.navigate(['/loggin']);
    }
  }

}
