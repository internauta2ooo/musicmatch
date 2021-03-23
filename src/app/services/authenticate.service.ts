import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
// import { setClassMetadata } from '@angular/core/src/r3_symbols';
// import { resolve } from 'node:path';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  async loginUser(credential) {
    let dataUser;
    let user = await this.storage.get("user").then(resp => {
      dataUser = resp;
    });

    return new Promise((accept, reject) => {
      let user = this.storage.get("user");
      if (
        credential.email == dataUser.email &&
        credential.password == dataUser.password
      ) {
        console.log("succes");
        accept("Succesful");
      } else {
        console.log("fail");
        reject("Fail");
      }
    });

  }

  registerUser(credential) {
    return new Promise((accept, reject) => {
      if (
        credential.email !== "" &&
        credential.password !== "" &&
        credential.user !== ""
      ) {
        this.storage.set("user", credential);
        accept("se registro el usuario correctamente");
      } else {
        console.log("fail");
        reject("Fail");
      }

    });

  }
}
