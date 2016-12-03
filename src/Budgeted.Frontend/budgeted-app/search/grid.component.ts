import { ChangeDetectionStrategy, Component, transition } from '@angular/core';
import { SearchService } from './search.service'
import { TransactionModel } from './entities'
import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { TagsComponent } from '../tags/tags.component';

@Component({
    selector: 'grid',
    templateUrl: 'grid.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
    Transactions: BehaviorSubject<TransactionModel[]>;
    SearchTest: string;
    Loading = false;

    constructor(searchSerivce: SearchService) {
        this.Transactions = searchSerivce.transactions;
        searchSerivce.getLatest();
    }

    addTag(tag:string, transaction: TransactionModel) {
        if (transaction.Tags.indexOf(tag) === -1)
            transaction.Tags.push(tag);
    }

    removeTag(tag:string,transaction:TransactionModel){
        transaction.Tags = transaction.Tags.filter(m=>m!=tag);
    }

}