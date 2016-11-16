import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DashboardComponent ],
  bootstrap:    [ DashboardComponent ],
  providers:[DashboardService]
})
export class BudgetedModule { }