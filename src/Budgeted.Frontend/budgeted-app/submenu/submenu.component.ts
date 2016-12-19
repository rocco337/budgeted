import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'submenu',
    template: `
            <div class="pure-menu custom-restricted-width">
          <ul class="pure-menu-list">
              <li class="pure-menu-item">
                
                <import-transactions></import-transactions>                
              </li>
              <li class="pure-menu-item">
              <add-transaction-modal></add-transaction-modal>              
              </li>
            </ul>
    `
})
export class SubmenuComponent {

}