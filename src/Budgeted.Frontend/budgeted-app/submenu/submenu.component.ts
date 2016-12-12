import { selector } from 'rxjs/operator/publish';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'submenu',
    template: `
            <div class="pure-menu custom-restricted-width">
          <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link" (click)="onImportRaised()">Import</a>
              </li>
              <li class="pure-menu-item">
              <a href="#" class="pure-menu-link" (click)="onAddNewTransactionRaised()">Add new transaction</a>
              </li>
            </ul>
              
    `
})
export class SubmenuComponent {

    onImportRaised(arg): void {
        alert("Import");
    }

    onAddNewTransactionRaised(arg): void {
        alert("New tran");
    }
}