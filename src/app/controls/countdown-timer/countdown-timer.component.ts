import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Theme } from 'src/app/enums/theme.enum';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  //Theme
  private _theme: Theme = Theme.Light;
  @Input() public set theme(value: Theme) {
    this._theme = value;
  }
  public get theme(): Theme {
    return this._theme;
  }

  //Target Date
  private _targetDate: Date = new Date();
  @Input() public set targetDate(value: Date) {
    this._targetDate = value;
  }
  public get targetDate(): Date {
    return this._targetDate;
  }

  //Timer interval in milliseconds
  private _timerInterval: number = 1000; //1 second (1000 milliseconds) is default
  @Input() public set timerInterval(value: number) {
    this._timerInterval = value;
  }
  public get timerInterval(): number {
    return this._timerInterval;
  }

  timer$!: Observable<number>;
  timerSubscription!: Subscription;

  //days
  private _days: number = 0;
  public set days(value: number) {
    this._days = value;
  }
  public get days() {
    return this._days;
  }

  //hours
  private _hours: number = 0;
  public set hours(value: number) {
    this._hours = value;
  }
  public get hours() {
    return this._hours;
  }

  //minutes
  private _minutes: number = 0;
  public set minutes(value: number) {
    this._minutes = value;
  }
  public get minutes() {
    return this._minutes;
  }

  //seconds
  private _seconds: number = 0;
  public set seconds(value: number) {
    this._seconds = value;
  }
  public get seconds() {
    return this._seconds;
  }

  constructor() { }

  ngOnInit(): void {
    this.timer$ = interval(this.timerInterval);

    this.timerSubscription = this.timer$.subscribe(x => {   
      const now = new Date();

      const difference = this.targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.days = d;

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.hours = h;

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.minutes = m;

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      this.seconds = s;

      //console.log(`days to go: ${d}, hours to go: ${h}, minutes to go: ${m}, seconds to go: ${s}`);
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }  
}
