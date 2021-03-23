import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {
    this.storage.create();
  }
  async canActivate() {
    console.log("can activate");
    let showedIntro = await this.storage.get('showedIntro');
    if (!showedIntro) {
      return true;
    } else {
      return false;
    }
  };

}
