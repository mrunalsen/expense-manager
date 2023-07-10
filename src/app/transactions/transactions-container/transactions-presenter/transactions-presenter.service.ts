import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Transactions } from '../../transactions.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TransactionsPresenterService {
  private formData: Subject<Transactions>;
  public formData$: Observable<Transactions>;

  constructor(private fb: FormBuilder) {
    this.formData = new Subject();
    this.formData$ = new Observable();
    this.formData$ = this.formData.asObservable();
  }

  public formBuild(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      amount: ['', Validators.required],
      date: '',
      type: [false]
    });
  }
  public onSubmit(form: FormGroup) {
    form.controls['date'].setValue(new Date().getTime());
    this.formData.next(form.value);
  }
}
