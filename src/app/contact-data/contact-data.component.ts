import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataFetchService } from '../shared/service/data-fetch.service';
import { ContactData } from '../shared/models/contactData';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent implements OnInit {

  constructor(private dfs: DataFetchService) { }
  contactData: FormGroup;

  ngOnInit() {
   
    this.contactData = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      tel: new FormControl(null),
      street: new FormControl(null),
      pcode: new FormControl(null),
      city: new FormControl(null),
    });
    this.dfs.fetchData.subscribe(() => {
      this.onSubmit();
      })
  }

  onSubmit() {
    let data: ContactData = new ContactData(
      this.contactData.value.name,
      this.contactData.value.street,
      this.contactData.value.email,
      this.contactData.value.plz,
      this.contactData.value.city,
      this.contactData.value.tel)
    this.dfs.submitContactData(data);
  }
}

