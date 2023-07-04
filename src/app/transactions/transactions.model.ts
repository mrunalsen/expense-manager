export class Transactions {
    id: string;
    incoming: string;
    outgoing: string;
    date: Date;
    constructor(
        id: string,
        incoming: string,
        outgoing: string,
        date: Date
    ) {
        this.id = id;
        this.incoming = incoming;
        this.outgoing = outgoing;
        this.date = date;
    }
}

export class TransactionResponse {
    transactionType: boolean;
    amount: number;
    constructor(
        transactionType: boolean,
        amount: number,
    ) {
        this.transactionType = transactionType;
        this.amount = amount;
    }
}