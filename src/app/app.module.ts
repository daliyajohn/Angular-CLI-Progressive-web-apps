import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppShellModule } from '@angular/app-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppShellModule.runtime()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
