import {Component } from '@angular/core'
import {SearchService} from './search.service'
import {TransactionModel} from './entities'
import {BehaviorSubject} from 'rxjs/Rx';

@Component({
    selector:'search',
    templateUrl:'search.template.html'
})
export class GridComponent{
    Transactions:TransactionModel[]
    SearchTest:string;
    Loading=false;

    constructor(searchSerivce:SearchService){
        this.Loading = true;
        searchSerivce.transactions.subscribe(m=>this.Transactions = m);
        searchSerivce.getLatest();
        this.Loading = false;
    }

    DoSearch(){

    }
}