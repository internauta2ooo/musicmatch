// import { Storage } from '@capacitor/core';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
    this.storage.set("showedIntro", false);
  }
  openSlides() {
    console.log("open slides");
    this.router.navigateByUrl("/intro");
    this.storage.set("showedIntro", true);
  }
  showAgain() {
    console.log("show again");
    this.storage.set("showedIntro", false);
  }
}
