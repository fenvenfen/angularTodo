import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SortListPipe } from './sortList.pipe';
import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SortListPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule
  ], 
  providers: [MdInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
