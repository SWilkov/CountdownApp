import { Component } from '@angular/core';
import { Theme } from './enums/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CountdownApp';
  currentTheme: Theme = Theme.Light;
  currentYear: number = new Date().getFullYear();
  newYears: Date = new Date(this.currentYear, 11, 31, 23, 59, 59, 0);
  christmas: Date = new Date(this.currentYear, 11, 23, 59, 59, 0);

  get oppositeTheme(): Theme {
    return this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
  } 
  
  changeTheme = () => {
    this.currentTheme = this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
  }
}
