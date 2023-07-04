import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transactions } from '../../transactions.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionsPresenterService } from '../transactions-presenter/transactions-presenter.service';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'transactions',
  templateUrl: './transactions-presentation.component.html'
})
export class TransactionsPresentationComponent implements OnInit {

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
   * @name listData
   * @description Get transactions from firebase
   */
  @Input() public set listData(v: Transactions[] | null) {
    this._listData = v;
    console.log('list--', v);
  }
  public get listData(): Transactions[] | null {
    return this._listData;
  }
  private _listData !: Transactions[] | null;

  @Output() add: EventEmitter<Transactions>;
  @Output() edit: EventEmitter<Transactions>;


  /**
   * @name Form
   * @description A Form group for submitting credit or debit
   */
  public form: FormGroup;

  public submitBtn: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private readonly presenter: TransactionsPresenterService,
    private trans: TransactionService
  ) {
    this.add = new EventEmitter<Transactions>();
    this.edit = new EventEmitter<Transactions>();
    this.form = presenter.formBuild();
    this.submitBtn = false;
  }

  ngOnInit(): void {
    this.presenter.formData$.subscribe((res) => {
      this.add.emit(res);
    });
  }

  /**
   * @name onSubmit()
   * @description 
   */
  public onSubmit() {
    this.presenter.onSubmit(this.form);
    console.log(this.form.value);
    this.form.reset();
  }
}
