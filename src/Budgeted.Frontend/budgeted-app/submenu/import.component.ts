
import { ModalComponent } from '../custom-controls/modal.control.component';
import { browserDetection } from '@angular/platform-browser/testing/browser_util';
import { Component } from '@angular/core';
import { TransactionModel } from './../search/entities'
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'import-transactions',
    template:`
        <modal-control title="Import" idSelector="import-modal">
            <form>

            <div class="pure-g">
                <div class="pure-u-1-1">
            <input type="file" name="pic" accept="csv/*">

                </div>
                </div>
            <br/>
             <button type="submit" class="pure-button pure-button-primary">Submit</button>

            </form>
        </modal-control>
    `
       
})
export class ImportComponent{

}