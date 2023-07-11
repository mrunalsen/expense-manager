import { Adapter } from "src/app/core/adapter/adapter";
import { Transactions, TransactionsResponse } from "../transactions.model";

export class TransactionAdapter implements Adapter<Transactions>{

    public toResponse(event: TransactionsResponse): Transactions {
        let cssname: string = event.type === true ? 'bg-success' : 'bg-danger';
        const newTransaction: Transactions = new Transactions(
            event.id,
            event.title,
            event.description,
            event.amount,
            event.date,
            event.type,
            cssname
        );
        return newTransaction;
    }
}