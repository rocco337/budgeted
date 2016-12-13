import { TransactionModel } from '../search/entities';
import { CompileMetadataWithIdentifier } from '@angular/compiler';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    outputs: ['onAddTagEvent'],
    selector: 'add-tag',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
                        <div style="display:inline-block; float:left;" class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                          <a href="#" class="pure-menu-link" style="padding:0 10px;"></a>
                          <ul class="pure-menu-children add-tag-list-holder">
                            <li lass="pure-menu-item">
                                <input type="text" [formControl]="term" (keydown.enter)="termAutoComplete(term.value)">                            
                            </li>
                            <li *ngIf="filteredTags.length===0">
                                <a href="#" class="pure-menu-link" (click)="addAndCreate(term.value)">{{"New: " + term.value}}</a>                                
                            </li>
                            <li class="pure-menu-item" *ngFor="let tag of filteredTags">
                                <a href="#" class="pure-menu-link" (click)="addTag(tag)">{{tag}}</a>
                            </li>                                
                          </ul>
                        </div>
    `  
})
export class TagsComponent {
    allTags: Array<string> = ["house", "utilities", "food", "books", "social", "tech", "vacation", "oo", "oooo"];
    filteredTags: Array<string>;

    term = new FormControl();

    @Input()
    transaction: TransactionModel

    onAddTagEvent = new EventEmitter();

    ngOnInit() {
        this.term.valueChanges.subscribe(searchTerm=>{
            this.filteredTags = this.allTags.filter(m => this.transaction.Tags.indexOf(m) === -1 && (!searchTerm || m.includes(searchTerm)));
        });  
        this.term.setValue("");              
    }

    addTag(tag) {
        if (this.transaction.Tags.indexOf(tag) === -1) {
            this.onAddTagEvent.emit(tag);
            this.term.setValue("");
        }
    }
    
    addAndCreate(tag){
         this.addTag(tag);
    }

    termAutoComplete(term){
        if(!term)
            return;
            
        if(this.filteredTags.length===0){
            this.addAndCreate(term);
        }
        else{
            this.addTag(this.filteredTags[0]);            
        }
    }
    
}