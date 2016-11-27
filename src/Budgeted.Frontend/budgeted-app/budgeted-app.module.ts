import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {SearchService} from './search/search.service'
import {GridComponent} from './search/grid.component'
import {SearchComponent} from './search/search.component'



@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ DashboardComponent,GridComponent,SearchComponent ],
  bootstrap:    [ DashboardComponent,GridComponent,SearchComponent ],
  providers:[DashboardService,SearchService]
})
export class BudgetedModule { }