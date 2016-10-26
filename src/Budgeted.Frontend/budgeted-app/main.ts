import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BudgetedModule } from './budgeted-app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(BudgetedModule);