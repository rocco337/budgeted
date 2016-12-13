import { browserDetection } from '@angular/platform-browser/testing/browser_util';
import { Component } from '@angular/core';
import { TransactionModel } from './../search/entities'

@Component({
    selector: 'add-transaction-modal',
    template: `
    
    <section class="modal--show" id="add-transaction-modal" tabindex="-1"
        role="dialog" aria-labelledby="modal-label" aria-hidden="true">

    <div class="modal-inner" style="overflow:visible;">
        <header id="modal-label">
        <h1>Add new transaction</h1>
        </header>
        <div class="modal-content" style="max-height:none; overflow:visible;">
        
        <form class="pure-form pure-form-stacked">
            <fieldset>                       
                <label for="email">Amount</label>
                <input id="amount" type="text" placeholder="10,11">
        
                <label for="description">Description</label>
                <input id="description" type="text" placeholder="Buying weekly groceries">
                
                <label for="date">Date</label>
                <input id="date" type="text" placeholder="dd/mm/yyyy">

                <div class="pure-g">
                    <div class="pure-u-1-1"> 
                            <add-tag [transaction]="transaction" (onAddTagEvent)="addTag($event)"></add-tag>
                            <span *ngFor="let tag of transaction.Tags">
                                <a href="#" (click)="removeTag(tag)">{{tag}}</a>
                            </span>
                    </div>
                </div>
                <br/>
                <button type="submit" class="pure-button pure-button-primary">Sign in</button>
            </fieldset>
         </form>        
        </div>
    </div>

    <a href="#!" class="modal-close" title="Close this modal" data-close="Close"
        data-dismiss="modal">?</a>
</section>
`
})
export class AddTransactionModalComponent {
    transaction:AddTransactionModel;

    constructor() {
        this.transaction = new AddTransactionModel()
    }

    addTag(tag){
         if (this.transaction.Tags.indexOf(tag) === -1)
            this.transaction.Tags.push(tag);
    }

    removeTag(tag){
       this.transaction.Tags = this.transaction.Tags.filter(m=>m!=tag);
    }

}

class AddTransactionModel{
    Amount:number;
    Description:string;
    DateCreated:string;
    Tags:Array<string> = [];
}