import { Adapter } from "src/app/core/adapter/adapter";
import { TransactionResponse } from "../transactions.model";

export class TransactionAdapter implements Adapter<TransactionResponse>{
    public toRequest(item: TransactionResponse) {
        // const data : 
    }
}