export class Transactions {
    id: string;
    incoming: string;
    outgoing: string;

    constructor(
        id: string,
        incoming: string,
        outgoing: string,
    ) {
        this.id = id;
        this.incoming = incoming;
        this.outgoing = outgoing;
    }
}