import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontroller',
  templateUrl: './gamecontroller.component.html',
  styleUrls: ['./gamecontroller.component.css']
})
export class GamecontrollerComponent implements OnInit {
  @Output('intervalClicked') intervalClicked = new EventEmitter<number>();

  numberToEmit = 1;
  myVar = null;

  constructor() { }

  ngOnInit(): void {
  }

  startInterval()
  {
    if(this.myVar == null)
      this.myVar = setInterval(temp=> {
        this.intervalClicked.emit(this.numberToEmit++);
      }, 1000);
  }

  stopInterval()
  {
    clearInterval(this.myVar);
    this.myVar = null;
  }

}
