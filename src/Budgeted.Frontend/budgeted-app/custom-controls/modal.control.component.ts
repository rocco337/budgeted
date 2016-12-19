import { browserDetection } from '@angular/platform-browser/testing/browser_util';
import { Component, ElementRef, Input, style } from '@angular/core';
import { TransactionModel } from './../search/entities'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'modal-control',
    template: `
    <a class="pure-menu-link" (click)="openModal()">{{title}}</a>
      <section class="modal--fade is-active" id="{{idSelector}}" (keydown.escape)="closeModal()" tabindex="-1" *ngIf="showModal"
        role="dialog" aria-hidden="true">

            <div class="modal-inner" style="overflow:visible;">
                <header>
                <h1>{{title}}</h1>
                </header>
                <div class="modal-content" style="max-height:none; overflow:visible;">
                    <ng-content></ng-content>
                </div>
            </div>

            <div class="modal-close" (click)="closeModal()">?</div>           
        </section>
    `
})
export class ModalComponent {

    @Input()
    title: string;

    @Input()
    idSelector:string;

    elementRef: ElementRef;

    showModal:boolean=false;
    constructor() {
    }

    openModal(){
        this.showModal = true;
    }
    closeModal() {
        this.showModal = false;
    }
}