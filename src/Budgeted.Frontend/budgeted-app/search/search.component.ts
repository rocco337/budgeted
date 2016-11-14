import {Component } from '@angular/core'
import {SearchService} from './search.service'
import {TransactionModel} from './entities'

@Component({
    selector:'search',
    templateUrl:'search.template.html'
})
export class SearchComponent{
    Transactions:TransactionModel[]
    SearchTest:string;
    Loading=false;

    constructor(searchSerivce:SearchService){
        this.Loading = true;
        this.Transactions = searchSerivce.getLatest();
        this.Loading = false;
    }

    DoSearch(){

    }
}