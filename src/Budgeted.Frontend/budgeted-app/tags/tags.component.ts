import { CompileMetadataWithIdentifier } from '@angular/compiler';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector:'add-tag',
    template:`
     <div style="display:inline-block;" class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                            <a href="#" class="pure-menu-link"></a>
                            <ul class="pure-menu-children">
                            <li lass="pure-menu-item">
                                <input type="text" [formControl]="term">                            
                            </li>
                                <li class="pure-menu-item" *ngFor="let tag of allTags | async"><a href="#" class="pure-menu-link">{{tag}}</a></li>
                                
                            </ul>
                        </div>
    `
})
export class TagsComponent{
    allTags:Observable<Array<string>>;
    term= new FormControl();

    constructor() {
         this.allTags = this.getTags(null);
         this.term.valueChanges.subscribe(m=> this.allTags = this.getTags(m));
    }

    addTag(){

    }

    getTags(search):Observable<Array<string>>{
        var tags =  ["house","utilities","food","books","social","tech","vacation","oo","oooo"];

        if(search){
            return Observable.of(tags.filter(m=> m.includes(search)));
        }

        return Observable.of(tags);
    }
}