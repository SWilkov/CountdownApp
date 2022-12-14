import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    ControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
