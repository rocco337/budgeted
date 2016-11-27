import {Component,ChangeDetectionStrategy } from '@angular/core'
import {SearchService} from './search.service'
import {TransactionModel} from './entities'
import {BehaviorSubject} from 'rxjs/Rx';

@Component({
    selector:'grid',
    templateUrl:'grid.template.html',    
})
export class GridComponent{
    Transactions:BehaviorSubject<TransactionModel[]>;
    SearchTest:string;
    Loading=false;

    constructor(searchSerivce:SearchService){        
        this.Transactions = searchSerivce.transactions;
        searchSerivce.getLatest();
    }


}