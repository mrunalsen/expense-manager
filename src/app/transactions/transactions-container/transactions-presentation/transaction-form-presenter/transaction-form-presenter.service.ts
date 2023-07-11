import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Transactions } from 'src/app/transactions/transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionFormPresenterService {
  private formData: Subject<Transactions>;
  public formData$: Observable<Transactions>;

  constructor(
    private fb: FormBuilder,
  ) {
    this.formData = new Subject();
    this.formData$ = new Observable();
    this.formData$ = this.formData.asObservable();
  }

  public formBuild(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      amount: ['', Validators.required],
      date: new Date().getTime(),
      type: [false],
    });
  }

  public onSubmit(form: FormGroup) {
    this.formData.next(form.value);
  }
}