import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {SearchService} from './search/search.service'
import {SearchComponent} from './search/search.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DashboardComponent,SearchComponent ],
  bootstrap:    [ DashboardComponent,SearchComponent ],
  providers:[DashboardService,SearchService]
})
export class BudgetedModule { }