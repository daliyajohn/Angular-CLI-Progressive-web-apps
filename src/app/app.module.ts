import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppShellModule } from '@angular/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppShellModule.runtime(),
    BrowserAnimationsModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
