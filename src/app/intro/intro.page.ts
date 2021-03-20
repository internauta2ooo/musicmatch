
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOptions = {
    initialSlide: 0,
    pager: true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 100,
  }

  collection = [{
    title: "lol 1",
    subTitle: "lol 1",
    description: "lol 1",
    icon: "play"
  }, {
    title: "lol 2",
    subTitle: "lol 2",
    description: "lol 2",
    icon: "play"
  }, {
    title: "lol 3",
    subTitle: "lol 3",
    description: "lol 3",
    icon: "play"
  }]
  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }
  finish() {
    console.log("finish");
    this.router.navigateByUrl("/home");
  }
  setFalse() {
    console.log("set false");
    this.storage.set("showedIntro", false);
  }
  ngOnInit() {
  }
}
