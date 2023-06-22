import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from '../transactions.model';
import { transition } from '@angular/animations';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html'
})
export class TransactionsContainerComponent implements OnInit {
  public transaction$: Observable<Transactions[]>;
  public list$: Observable<Transactions[]>;

  constructor(private transactionService: TransactionService) {
    this.transaction$ = new Observable();
    this.list$ = new Observable();
  }
  ngOnInit(): void {
    this.getData();
  }
  public addData(form: Transactions) {
    this.transactionService.addData(form);
  }
  public getData() {
    this.list$ = this.transactionService.getData();
  }
}
