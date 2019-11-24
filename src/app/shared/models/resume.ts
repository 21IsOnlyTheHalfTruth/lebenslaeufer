import { Position } from './position';
import { ContactData } from './contactData';

export class Resume {
    constructor(
  public contactData: ContactData,
  public posArr?: Array<Position>) {
  }

}