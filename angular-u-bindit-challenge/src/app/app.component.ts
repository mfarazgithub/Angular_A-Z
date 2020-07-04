import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind-it';
  myNumbers: number[] = [];
  oddNumbers: number[] = [];

  catchIntervalValue(myNumber: number)
  {
    this.myNumbers.push(myNumber);
  }
}
