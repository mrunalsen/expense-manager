import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
    this.authserv.deleteToken();
    this.router.navigateByUrl('login');
  }
}
