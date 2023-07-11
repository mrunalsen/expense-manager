import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Transactions } from '../../transactions.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TransactionFormPresentationComponent } from '../transactions-presentation/transaction-form-presentation/transaction-form-presentation.component';


@Injectable({
  providedIn: 'root'
})
export class TransactionsPresenterService {
  private formData: Subject<Transactions>;
  public formData$: Observable<Transactions>;

  constructor(
    private fb: FormBuilder,
    private overlay: Overlay
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
      date: '',
      type: [false],
    });
  }
  public onSubmit(form: FormGroup) {
    form.controls['date'].setValue(new Date().getTime());
    this.formData.next(form.value);
  }

  public openOverlay() {
    const overlayRef = this.overlay.create({
      // panelClass: 'container m-auto',
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    const component = new ComponentPortal(TransactionFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => { overlayRef.detach(); });

    componentRef.instance.add.subscribe((data: Transactions) => {
      overlayRef.detach();
      this.formData.next(data);
      console.log(data);
    });
  }
}
