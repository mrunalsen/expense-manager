import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(
    private readonly authserv: AuthService,
    private router: Router
  ) { }
  public onLogout() {
    this.authserv.logout();
    this.router.navigateByUrl('login');
  }
}
