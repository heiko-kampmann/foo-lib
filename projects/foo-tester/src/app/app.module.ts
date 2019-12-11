import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooLibComponent } from 'foo-lib';
import { Foo2Component, Foo3Component, Foo4Component } from 'foo-lib';



@NgModule({
  declarations: [
    AppComponent,
    FooLibComponent,
    Foo2Component,
    Foo3Component,
    Foo4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
