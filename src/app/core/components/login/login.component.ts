import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
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
  public translate1: boolean;
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
    this.translate1 = false;
    this.isMobile = true;
  }

  ngOnInit(): void {
    this.onResize(event);
  }

  public onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigateByUrl('signup');
    }
  }
  public onTranslate() {
    this.translate = !this.translate;
    this.translate1 = !this.translate1;
  }
}