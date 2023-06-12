import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthService {
  // isLoggedIn: boolean;
  public userToken: any;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
    // this.isLoggedIn = false;
  }

  /**
   * @name login
   * @description method for loggin in app via firebase auth
   */
  public login(email: string, password: string): void {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.toastr.success('Successfully Logged in');
      this.router.navigateByUrl('dashboard');
    }, err => {
      this.toastr.error(err.message);
      this.router.navigateByUrl('/login');
    });
  }

  /**
   * @name onRegister
   * @description method for registering on app with email via firebase auth
   */
  public register(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(() => {
      // this.toastr.success();
      this.router.navigateByUrl('login');
    },
      err => {
        this.router.navigateByUrl('signup');
        this.toastr.error(err.message);
      }
    );
  }

  /**
   * @name logout
   * @description method for loggin out
   */
  public logout() {
    this.toastr.error('Successfully Logged Out', '');
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('login');
    },
      err => this.toastr.error(err.message)
    );
  }
  public getToken() {
    this.userToken = localStorage.getItem('token') ?? '';
    return this.userToken;
  }
  // public deleteToken() {
  //   this.toastr.error('Successfully Logged Out', '');
  //   this.userToken = localStorage.removeItem('token');
  //   return this.userToken;
  // }
}
