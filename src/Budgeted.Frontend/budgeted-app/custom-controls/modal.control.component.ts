import { browserDetection } from '@angular/platform-browser/testing/browser_util';
import { Component, ElementRef, Input, style } from '@angular/core';
import { TransactionModel } from './../search/entities'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'modal-control',
    template: `

      <section class="modal--show" id="add-transaction-modal" tabindex="-1"
        role="dialog" aria-labelledby="modal-label" aria-hidden="true" (keydown.escape)="closeModal()">

            <div class="modal-inner" style="overflow:visible;">
                <header id="modal-label">
                <h1>{{title}}</h1>
                </header>
                <div class="modal-content" style="max-height:none; overflow:visible;">
                    <ng-content></ng-content>
                </div>
            </div>

 <div class="modal-close" title="Close this modal" data-close="Close" data-dismiss="modal" (click)="closeModal()">?</div>
            <a href="#!" class="modal-close close-anchor" title="Close this modal" data-close="Close" style="display:none;"
                data-dismiss="modal">?</a>
        </section>
    `
})
export class ModalComponent {

    @Input()
    title: string;
    elementRef: ElementRef;

    constructor(_elementRef: ElementRef) {
        this.elementRef = _elementRef;
    }

    closeModal() {
        this.elementRef.nativeElement.querySelector('.close-anchor').click();
    }
}