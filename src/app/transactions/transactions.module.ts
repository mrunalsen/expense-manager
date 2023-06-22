import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsContainerComponent } from './transactions-container/transactions-container.component';
import { TransactionsPresentationComponent } from './transactions-container/transactions-presentation/transactions-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsContainerComponent,
    TransactionsPresentationComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransactionsModule { }
