import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationPresenterService } from '../registration-presenter/registration-presenter.service';
import { User } from '../../registration.model';

@Component({
  selector: 'registration-presentation',
  templateUrl: './registration-presentation.component.html'
})
export class RegistrationPresentationComponent implements OnInit {
  @Input() public set formData(value: User[] | null) {
    if (value) {
      this._formData = value;
    }
  }
  public get formData(): User[] | null {
    return this._formData;
  }

  @Output() add: EventEmitter<User>;
  @Output() edit: EventEmitter<User>;
  public regForm: FormGroup;
  public formSubmitted: boolean;
  private _formData!: User[];


  constructor(
    private readonly _regPresenter: RegistrationPresenterService
  ) {
    this.regForm = _regPresenter.formBuild();
    this.add = new EventEmitter<User>();
    this.edit = new EventEmitter<User>();

    this.formSubmitted = false;
  }
  ngOnInit(): void {
    this._regPresenter.formData$.subscribe((res) => {
      this.add.emit(res);
    });
  }
  public onSubmit() {
    // this.formSubmitted = this.regForm.valid;
    // if (!this.formSubmitted) {
    // }
    this._regPresenter.onSubmit(this.regForm);
    console.log(this.regForm.value);
    this.regForm.reset();
  }

}
