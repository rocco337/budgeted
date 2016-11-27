import { Injectable } from '@angular/core'
import {BehaviorSubject} from 'rxjs/Rx';
import {TransactionModel} from './entities'

@Injectable()
export class SearchService{

    transactions:BehaviorSubject<TransactionModel[]> = new BehaviorSubject<TransactionModel[]>(null);

    search(input:string):void{
        this.transactions.next([
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),            
        ]);
    }

    getLatest():void{
       this.search("");
    }
}