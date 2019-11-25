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
  contactData = new FormGroup({
    name: new FormControl("Michael Horvath"),
    email: new FormControl("email@email.com"),
    tel: new FormControl("0767/6782345"),
    street: new FormControl("auf der Lände 3"),
    pcode: new FormControl("1234"),
    city: new FormControl("Hintertupfing"),
  });

  ngOnInit() {
   
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

