import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {SearchService} from './search/search.service'
import {GridComponent} from './search/grid.component'
import {SearchComponent} from './search/search.component'
import {TagsComponent} from './tags/tags.component'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule ],
  declarations: [ DashboardComponent,GridComponent,SearchComponent,TagsComponent ],
  bootstrap:    [ DashboardComponent,GridComponent,SearchComponent,TagsComponent ],
  providers:[DashboardService,SearchService]
})
export class BudgetedModule { }