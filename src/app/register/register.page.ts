import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validationMessage = {
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "No es un email valido" }
    ],
    user: [
      { type: "required", message: "El usuario es requerido" },
      { type: "minlength", message: "No valido el usuario" }
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
    this.registerForm = this.formBuilder.group({
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
      ),
      user: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }
  goToRegister(registerForm) {
    console.log(registerForm);
    this.authService.registerUser(registerForm).then(() => {
      this.navCtrl.navigateForward("/login");
    });

  }
  goToLogin() {

    this.navCtrl.navigateBack("/login");
  }
}
