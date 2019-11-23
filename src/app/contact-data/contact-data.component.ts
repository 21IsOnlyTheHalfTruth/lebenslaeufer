import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent implements OnInit {

  constructor() { }

  contactData: FormGroup;

  ngOnInit() {
   
    this.contactData = new FormGroup({
      'name': new FormControl(null)
    });
    
  }

  onSubmit() {
  console.log(this.contactData.get('editor'));
  }
}