import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppShellModule } from '@angular/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

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
    MdCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
