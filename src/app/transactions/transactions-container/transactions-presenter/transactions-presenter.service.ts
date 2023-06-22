import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Transactions } from '../../transactions.model';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      incoming: [''],
      outgoing: [''],
    });
  }
  public onSubmit(form: FormGroup) {
    this.formData.next(form.value);
  }

}
