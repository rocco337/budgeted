import { browserDetection } from '@angular/platform-browser/testing/browser_util';
import { Component } from '@angular/core';
import { TransactionModel } from './../search/entities'
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'add-transaction-modal',
    templateUrl:'add-transaction.modal.template.html'
})
export class AddTransactionModalComponent {

    formModel: FormGroup;

    constructor(fb: FormBuilder) {

        this.formModel = fb.group({
            'amount': [null, Validators.required],
            'description': [null, Validators.required],
            'date': [null, Validators.required],
            'tags': [new Array(), Validators.required],
        });
    }

    addTag(tag) {
        var tags: string[] = this.formModel.controls['tags'].value;
        tags = tags ? tags : new Array();

        if (tags.indexOf(tag) === -1)
            tags.push(tag);

        this.formModel.controls['tags'].setValue(tags);
    }

    removeTag(tag) {
        var tags: string[] = this.formModel.controls['tags'].value;
        tags = tags ? tags : new Array();

        tags = tags.filter(m => m != tag);
        this.formModel.controls['tags'].setValue(tags);
    }

    submitForm(value: any): void {
        console.log('Reactive Form Data: ')
        console.log(value);
    }
}

