import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {SearchService} from './search/search.service'
import {GridComponent} from './search/grid.component'
import {SearchComponent} from './search/search.component'
import {TagsComponent} from './tags/tags.component'
import {SubmenuComponent} from './submenu/submenu.component'


@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule ],
  declarations: [ DashboardComponent,GridComponent,SearchComponent,TagsComponent,SubmenuComponent ],
  bootstrap:    [ DashboardComponent,GridComponent,SearchComponent,SubmenuComponent ],
  providers:    [DashboardService,SearchService]
})
export class BudgetedModule { }