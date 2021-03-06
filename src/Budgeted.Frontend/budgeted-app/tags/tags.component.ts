import { TagsService } from './tags.service';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { TransactionModel } from '../search/entities';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, style } from '@angular/core';

@Component({
    selector: 'add-tag',
    template: `         
                     <div class="pure-menu-has-children pure-menu-allow-hover" style="float:left;">
                            <a href="#" class="pure-menu-link" style="padding:0 10px;" 
                         *ngIf="!isComponentExpanded"
                          (mouseenter)="tagInputOnFocusInRaised()" 
                          (mouseleave)="tagInputOnFocusOutRaised()" 
                          ></a>
                     </div>
                       <div style="display:inline-block; float:left; height:40px;" class="pure-menu-item" 
                       (mouseenter)="tagInputOnFocusInRaised()"  
                       (mouseleave)="tagInputOnFocusOutRaised()" >

                          <input type="text" 
                          placeholder="type here"
                          class="no-margin" [formControl]="term" *ngIf="isComponentExpanded || (!isComponentExpanded && showSuggestions)"
                          (keydown.enter)="termAutoComplete(term.value)"
                          (focus)="tagInputOnFocusInRaised()" 
                          (focusout)="tagInputOnFocusOutRaised()" 
                          (keydown.escape)="tagInputOnFocusOutRaised(term.value)" >     
                         
                          <ul class="add-tag-list-holder no-padding no-margin" *ngIf="showSuggestions" style="position:absolute;">                            
                            <li *ngIf="filteredTags.length===0 && term.value">
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
    filteredTags: Array<string>;
    tagsService: TagsService;

    term = new FormControl();

    @Input()
    existingTags: string[]

    @Input()
    isComponentExpanded: boolean = false;

    @Output()
    onAddTagEvent = new EventEmitter();

    showSuggestions = false;

    constructor(tagService: TagsService) {
        this.tagsService = tagService;
    }

    ngOnInit() {
        this.existingTags = this.existingTags ? this.existingTags : new Array();

        var tags = this.tagsService.getTags();
        this.term.valueChanges.subscribe(searchTerm => {
            if(!searchTerm)
                this.filteredTags = [];
            else
                this.filteredTags = tags.filter(m => this.existingTags.indexOf(m) === -1 && (!searchTerm || m.includes(searchTerm)));
        });

        this.term.setValue("");
    }

    addTag(tag) {
        if (this.existingTags.indexOf(tag) === -1) {
            this.onAddTagEvent.emit(tag);
            this.term.setValue("");
        }
    }

    addAndCreate(tag) {
        this.addTag(tag);
    }

    termAutoComplete(term) {
        if (!term)
            return;

        if (this.filteredTags.length === 0) {
            this.addAndCreate(term);
        }
        else {
            this.addTag(this.filteredTags[0]);
        }
    }

    tagInputOnFocusOutRaised() {
        this.showSuggestions = false;
    }

    tagInputOnFocusInRaised() {
        if (!this.term.value)
            this.filteredTags = [];
        
        this.showSuggestions = true;
    }

}