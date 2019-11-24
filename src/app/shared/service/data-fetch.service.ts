import { Injectable, EventEmitter } from '@angular/core';
import { Position } from '../models/position';
import { Observable, of } from 'rxjs';
import { ContactData } from '../models/contactData';


@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  fetchData = new EventEmitter();
  private contactData: ContactData;
  private posArr: Position[];
  constructor() { }

  submitButtonPressed() {
    this.fetchData.emit();

  }
  submitPosArr(posArr: Position[]) {
    this.posArr = posArr;
  }

  submitContactData(data: ContactData){
    this.contactData = data;
  }
  
  getContactData() {
    return this.contactData
  }

  getPosArr() {
    return this.posArr;
  }
}
