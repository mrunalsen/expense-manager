import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsContainerComponent } from './transactions-container/transactions-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionAdapter } from './transaction-adapter/transaction.adapter';
import { TransactionsPresentationComponent } from './transactions-container/transactions-presentation/transactions-presentation.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsContainerComponent,
    TransactionsPresentationComponent,
    TransactionsPresentationComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionAdapter
  ]
})
export class TransactionsModule { }
