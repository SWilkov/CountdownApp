import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   CountdownTimerComponent
  ]
})
export class ControlsModule { }
