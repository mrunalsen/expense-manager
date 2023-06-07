import { Component, OnInit } from '@angular/core';
import { User } from '../registration.model';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html'
})
export class RegistrationContainerComponent implements OnInit {
  public user$: Observable<User[]>;

  constructor(
    private registrationService: RegistrationService
  ) {
    this.user$ = new Observable();
  }
  ngOnInit(): void {

  }
  public addData(form: User) {
    this.registrationService.addData(form);
  }
}
