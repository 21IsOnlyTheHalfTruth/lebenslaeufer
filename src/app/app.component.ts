import { Component, OnInit, ViewChild } from '@angular/core';
import { Position } from './shared/models/position';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  submitDataHandler(posArr: Array<Position>) {
    console.info(posArr);
  }
}
  
