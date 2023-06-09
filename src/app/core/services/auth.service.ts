import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  // isLoggedIn: boolean;
  constructor(
    private firebaseAuth: AngularFireAuth,
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
      this.router.navigateByUrl('signup');
    }, err => {
      alert(err.message);
      this.router.navigateByUrl('/login');
    });
  }

  /**
   * @name onRegister
   * @description method for registering on app with email via firebase auth
   */
  public register(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('reg success');
      this.router.navigateByUrl('login');
    },
      err => {
        alert(err.message);
        this.router.navigateByUrl('signup');
      }
    );
  }

  /**
   * @name logout
   * @description method for loggin out
   */
  public logout() {
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('login');
    },
      err => alert(err.message)
    );
  }
}
