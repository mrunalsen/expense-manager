export class Transactions {
    id: string;
    amount: number;
    date: Date;
    title: string;
    description: string;
    type: boolean;
    classname: string;
    constructor(
        id: string,
        title: string,
        description: string,
        amount: number,
        date: Date,
        type: boolean,
        classname: string,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.classname = classname;
    }
}
export class TransactionsResponse {
    id: string;
    amount: number;
    date: Date;
    title: string;
    description: string;
    type: boolean;
    constructor(
        id: string,
        title: string,
        description: string,
        amount: number,
        date: Date,
        type: boolean,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.type = type;
    }
}