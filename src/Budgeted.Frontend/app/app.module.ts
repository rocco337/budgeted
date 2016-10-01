import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontpageComponent }   from './frontpage.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FrontpageComponent ],
  bootstrap:    [ FrontpageComponent ]
})
export class AppModule { }