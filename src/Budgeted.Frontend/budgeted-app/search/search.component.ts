import { selector } from 'rxjs/operator/multicast';
import { Component } from '@angular/core';
import {SearchService} from './search.service'


@Component({
    selector:'search',
    template:`<input type='text' 
    placeholder='Search'
    (keydown.enter)="onEnter($event)"
    [(ngModel)]="input">`
})
export class SearchComponent{
    
    input:string;
    searchService:SearchService;
    

    constructor(searchService:SearchService) {
       this.searchService = searchService;        
    }

    onEnter(event: any): void {
        this.searchService.search(this.input);
        event.preventDefault();
    }

}