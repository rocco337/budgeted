import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'submenu',
    template: `
            <div class="pure-menu custom-restricted-width">
          <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="#add-transaction-modal" class="pure-menu-link">Import</a>
              </li>
              <li class="pure-menu-item">
              <a href="#" class="pure-menu-link" (click)="onAddNewTransactionRaised()">Add new transaction</a>
              </li>
            </ul>

            <add-transaction-modal></add-transaction-modal>
              
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