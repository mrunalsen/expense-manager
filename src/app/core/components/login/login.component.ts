import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // public email: string;
  // public password: string;
  public loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // this.email = '';
    // this.password = '';
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });
  }

  // public login() {
  //   if (this.email == '') {
  //     alert('pls fill');
  //     return;
  //   }
  //   if (this.password == '') {
  //     alert('pls fill');
  //     return;
  //   }
  //   this.auth.onLogin(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  // }

  public onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigateByUrl('signup');
    }
  }
}