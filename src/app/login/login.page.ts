import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from './../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validationMessage = {
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "No es un email valido" }
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "No valido el password" }
    ]
  };

  errorMessage: string = "";
  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.storage.create();
    this.loginForm = this.formBuilder.group({
      email: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }

  async loginUser(loginForm) {
    //
    console.log(loginForm);
    await this.authService.loginUser(loginForm).then(resp => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(resp => {
      this.errorMessage = resp;
    });
    this.navCtrl.navigateForward("/menu/home");
  }
  goToRegister() {
    this.navCtrl.navigateForward("/register");
  }

}
