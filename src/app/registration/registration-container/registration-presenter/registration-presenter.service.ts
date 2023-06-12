import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../../registration.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegistrationPresenterService {
  private formData: Subject<User>;
  public formData$: Observable<User>;

  constructor(private fb: FormBuilder) {
    this.formData = new Subject();
    this.formData$ = new Observable();
    this.formData$ = this.formData.asObservable();
  }

  public formBuild(): FormGroup {
    return this.fb.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      firstname: [''],
      lastname: [''],
    });
  }
  public onSubmit(form: FormGroup) {
    this.formData.next(form.value);
  }
}
