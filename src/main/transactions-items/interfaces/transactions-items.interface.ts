import { Document } from 'mongoose';

export interface TransactionsItems extends Document {
    number_id: Number,
    operationId: string;
    type: string;
    transactionId: any;
    serviceId: any;
    itemId: any;
    qty: string;
    price: string;
    taxes: string;
    discount: string;
    total: string;
    entity: number;
    createdBy: string;
    updatedBy: string;
}
