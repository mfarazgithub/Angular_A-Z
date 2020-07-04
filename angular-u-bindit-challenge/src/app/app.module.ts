import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamecontrollerComponent } from './gamecontroller/gamecontroller.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrollerComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
