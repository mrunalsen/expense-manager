import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsContainerComponent } from './transactions-container/transactions-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionAdapter } from './transaction-adapter/transaction.adapter';
import { TransactionsPresentationComponent } from './transactions-container/transactions-presentation/transactions-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TransactionFormPresentationComponent } from './transactions-container/transactions-presentation/transaction-form-presentation/transaction-form-presentation.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsContainerComponent,
    TransactionsPresentationComponent,
    TransactionsPresentationComponent,
    TransactionFormPresentationComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [
    TransactionAdapter
  ]
})
export class TransactionsModule { }
