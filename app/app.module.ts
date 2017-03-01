import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './components/app.component.ts';
import { ChildComponent }  from './components/child.component.ts';
import {Site} from './Site.ts';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent , ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }