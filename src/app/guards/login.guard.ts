import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {
    this.storage.create();
  }
  async canActivate() {
    console.log("can activate");
    let isUserLoggedIn = this.storage.get('isUserLoggedIn');
    let loggedIn;
    await isUserLoggedIn.then(resp => {
      loggedIn = resp;
    });
    if (loggedIn) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
    }
  };

}
