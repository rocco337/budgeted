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
import {TagsService} from './tags/tags.service'

import {SubmenuComponent} from './submenu/submenu.component'
import {AddTransactionModalComponent} from './submenu/add-transaction.modal.component'

import {ModalComponent} from './custom-controls/modal.control.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule ],
  declarations: [ DashboardComponent,GridComponent,SearchComponent,TagsComponent,SubmenuComponent,AddTransactionModalComponent,ModalComponent ],
  bootstrap:    [ DashboardComponent,GridComponent,SearchComponent,SubmenuComponent,AddTransactionModalComponent ],
  providers:    [DashboardService,SearchService,TagsService]
})
export class BudgetedModule { }