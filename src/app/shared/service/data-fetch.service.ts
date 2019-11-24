import { Injectable, EventEmitter } from '@angular/core';
import { Position } from '../models/position';
import { Observable, of } from 'rxjs';
import { ContactData } from '../models/contactData';


@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  fetchData = new EventEmitter();

  constructor() { }

  submitButtonPressed() {
    this.fetchData.emit();
  }
  submitPosArr(posArr: Position[]) {
  }

  submitContactData(data: ContactData){
    console.info("from service");
    console.info(data)
  }
}
