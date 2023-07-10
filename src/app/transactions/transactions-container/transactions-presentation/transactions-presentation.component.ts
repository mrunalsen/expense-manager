import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transactions } from '../../transactions.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionsPresenterService } from '../transactions-presenter/transactions-presenter.service';
import { TransactionService } from '../../transaction.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'transactions',
  templateUrl: './transactions-presentation.component.html',
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
  @Output() delete: EventEmitter<string>;
  @Output() update: EventEmitter<Transactions>;

  /**
   * @name Form
   * @description A Form group for submitting credit or debit
   */
  public form: FormGroup;
  isChecked: boolean;
  public submitBtn: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private readonly presenter: TransactionsPresenterService,
    private trans: TransactionService
  ) {
    this.add = new EventEmitter<Transactions>();
    this.edit = new EventEmitter<Transactions>();
    this.delete = new EventEmitter<string>();
    this.update = new EventEmitter<Transactions>();
    this.form = presenter.formBuild();
    this.submitBtn = false;
    this.isChecked = false;
  }

  ngOnInit(): void {
    this.presenter.formData$.subscribe((res) => {
      this.add.emit(res);
    });
  }
  /**
   * @name itemId
   * @description method used for trackby function for list
   */
  public itemId(index: number, item: Transactions) {
    return item.id;
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

  public onDelete(id: string) {
    this.delete.emit(id);
  }
  public isCredit(event: any) {
    console.log(event.target.checked);
    return this.isChecked = event.target.checked;
  }
}
