import { Injectable } from '@angular/core'
import {TransactionModel} from './entities'

@Injectable()
export class SearchService{
    search(input:string):TransactionModel[]{
        return [
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),
            new TransactionModel(1,12.3,"Lidl","12.11.2016 12:34",["house"]),            
        ]
    }

    getLatest():TransactionModel[]{
        return this.search("");
    }
}