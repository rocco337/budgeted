import * as console from 'console';
import { TransactionModel } from '../search/entities';
import { CompileMetadataWithIdentifier } from '@angular/compiler';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    outputs: ['onAddTagEvent'],
    selector: 'add-tag',
    template: `
                        <div style="display:inline-block;" class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                          <a href="#" class="pure-menu-link"></a>
                          <ul class="pure-menu-children" style="list-style:none;">
                            <li lass="pure-menu-item">
                                <input type="text" [formControl]="term">                            
                            </li>
                            <li class="pure-menu-item" *ngFor="let tag of allTags | async">
                                <a href="#" class="pure-menu-link" (click)="addTag(tag)">{{tag}}</a>
                            </li>                                
                          </ul>
                        </div>
    `,
     changeDetection:  ChangeDetectionStrategy.OnPush

})
export class TagsComponent {
    allTags: Observable<Array<string>>;
    term = new FormControl();

   
    onAddTagEvent = new EventEmitter();

    constructor() {
        this.allTags = this.getTags(null);
        this.term.valueChanges.subscribe(m => this.allTags = this.getTags(m));
    }

    addTag(tag) {        
        this.onAddTagEvent.emit(tag);
    }

    getTags(search): Observable<Array<string>> {
        const tags = ["house", "utilities", "food", "books", "social", "tech", "vacation", "oo", "oooo"];
        const numberOfItemsInList = 5;

        if (search) {
            return Observable.of(tags.filter(m => m.includes(search)).slice(0, numberOfItemsInList));
        }

        return Observable.of(tags.slice(0, numberOfItemsInList));
    }
}