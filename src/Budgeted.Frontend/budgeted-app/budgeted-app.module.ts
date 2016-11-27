import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {SearchService} from './search/search.service'
import {GridComponent} from './search/grid.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DashboardComponent,GridComponent ],
  bootstrap:    [ DashboardComponent,GridComponent ],
  providers:[DashboardService,SearchService]
})
export class BudgetedModule { }