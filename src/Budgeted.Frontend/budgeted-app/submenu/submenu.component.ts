import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'submenu',
    template: `
            <div class="pure-menu custom-restricted-width">
          <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">Import</a>
              </li>
              <li class="pure-menu-item">
              <a class="pure-menu-link" href="#add-transaction-modal" >Add new transaction</a>
              </li>
            </ul>

            <add-transaction-modal></add-transaction-modal>
              
    `
})
export class SubmenuComponent {

}