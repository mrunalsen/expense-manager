import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Transactions } from 'src/app/transactions/transactions.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionFormPresenterService } from '../transaction-form-presenter/transaction-form-presenter.service';

@Component({
  selector: 'app-transaction-form-presentation',
  templateUrl: './transaction-form-presentation.component.html',
  animations: [
    trigger('focusPanel', [
      state('false', style({
        backgroundColor: 'red',
        color: 'white'
      })),
      state('true', style({
        backgroundColor: 'green',
        color: 'white'
      })),
      transition('true <=> false', animate('200ms ease-in')),
    ]),
  ],
})
export class TransactionFormPresentationComponent implements OnInit {

  /**
    * @name formData
    * @description Form to set income outcome transactions
    */
  @Input() public set formData(value: Transactions[] | null) {
    if (value) {
      this._formData = value;
    }
  }
  public get formData(): Transactions[] | null {
    return this._formData;
  }
  private _formData!: Transactions[];


  /**
   * @name Form
   * @description A Form group for submitting credit or debit
  */
  public form: FormGroup;
  public isChecked: boolean;

  @Output() add: EventEmitter<Transactions>;

  constructor(
    private formBuilder: FormBuilder,
    private readonly presenter: TransactionFormPresenterService
  ) {
    this.add = new EventEmitter<Transactions>();
    this.form = presenter.formBuild();
    this.isChecked = false;
  }

  ngOnInit(): void {
    this.form.get('type')?.valueChanges.subscribe((res) => { this.isChecked = res; });
    this.presenter.formData$.subscribe((data: Transactions) => { this.add.emit(data); });
  }

  public onSubmit() {
    this.presenter.onSubmit(this.form);
    console.log(this.form.value);
  }
}