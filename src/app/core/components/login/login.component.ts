import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 768 ? this.isMobile = true : this.isMobile = false;
  }

  public isMobile: boolean;
  public innerWidth: any;
  public translate: boolean;
  public translateR: boolean;
  public loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });
    this.translate = true;
    this.translateR = false;
    this.isMobile = true;
  }

  ngOnInit(): void {
    this.onResize(event);
  }

  public onLogin() {
    if (this.loginForm.valid) {
      // this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
        localStorage.setItem('token', 'true');
        // this.toastr.success('Successfully Logged in');
        this.router.navigateByUrl('dashboard');
        console.log(data.user.multiFactor.user.providerData);

      });
      // this.router.navigateByUrl('dashboard');
    }
  }
  public onTranslate() {
    this.translate = !this.translate;
    this.translateR = !this.translateR;
  }
}